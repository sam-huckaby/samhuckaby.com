import React, { Component } from 'react';

import styles from '../styles/contactButton.module.scss';

export default class ContactButton extends Component {
    // This constructor may be unnecessary
    constructor(props) {
        super(props);

        this.state = {
            formOpen: false,
            sender: '',
            email: '',
            message: '',
            errors: {
                sender: false,
                email: false,
                message: false,
            },
            sending: false,
            sendComplete: false,
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async sendEmail() {
        // Do some basic validation
        let fail = false;
        // Sender Name
        if (this.state.sender === '') {
            fail = true;
            await this.setState({
                errors: {
                    ...this.state.errors,
                    sender: true
                }
            });
        } else {
            await this.setState({
                errors: {
                    ...this.state.errors,
                    sender: false
                }
            });
        }

        // Sender E-Mail
        if (this.state.email === '' || !this.state.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
            fail = true;
            await this.setState({
                errors: {
                    ...this.state.errors,
                    email: true
                }
            });
        } else {
            await this.setState({
                errors: {
                    ...this.state.errors,
                    email: false
                }
            });
        }

        // Message
        if (this.state.message === '') {
            fail = true;
            await this.setState({
                errors: {
                    ...this.state.errors,
                    message: true
                }
            });
        } else {
            await this.setState({
                errors: {
                    ...this.state.errors,
                    message: false
                }
            });
        }

        if (fail) {
            return;
        }

        await this.setState({
            sending: true
        });

        try {
            await fetch("/api/utils/contact", {
              "method": "POST",
              "headers": { "content-type": "application/json" },
              "body": JSON.stringify(this.state)
            })
      
            // Give the user the feel that something is happening
            setTimeout(async () => {
                await this.setState({
                    sendComplete: true
                });

                // Get rid of the dialog after the user feels like something worked
                setTimeout(async () => {
                    this.closeContactForm();
                    await this.setState({
                        sending: false,
                        sendComplete: false,
                    });
                }, 3000);
            }, 2000);
          } catch (error) {
              // Tell the user something...
          }
    }

    openContactForm() {
        this.setState({
            formOpen: true
        });
    }

    closeContactForm() {
        this.setState({
            formOpen: false,
            sender: '',
            email: '',
            message: '',
        });
    }

    renderContactButton() {
        return (
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" onClick={() => this.openContactForm()}>Get In Touch</button>
        );
    }

    renderSenderField() {
        if (this.state.errors.sender) {
            return (
                <div className="flex flex-col w-full">
                    <span className="dark:text-white">Your Name</span>
                    <input
                        name="sender"
                        disabled={this.state.sending}
                        value={this.state.sender}
                        onChange={(event) => this.handleInputChange(event)}
                        className="border-red-500 border-solid border-2 bg-transparent dark:text-white rounded"
                        type="text"></input>
                    <div className="text-red-500">This field is required</div>
                </div>
            );
        } else {
            return (
                <div className="flex flex-col w-full">
                    <span className="dark:text-white">Your Name</span>
                    <input
                        name="sender"
                        disabled={this.state.sending}
                        value={this.state.sender}
                        onChange={(event) => this.handleInputChange(event)}
                        className="border-blue-500 border-solid border-2 bg-transparent dark:text-white disabled:bg-gray-300/30 rounded"
                        type="text"></input>
                </div>
            );
        }
    }

    renderEmailField() {
        if (this.state.errors.email) {
            return (
                <div className="flex flex-col w-full pt-5">
                    <span className="dark:text-white">Your E-Mail</span>
                    <input
                        name="email"
                        disabled={this.state.sending}
                        value={this.state.email}
                        onChange={(event) => this.handleInputChange(event)}
                        className="border-red-500 border-solid border-2 bg-transparent dark:text-white rounded"
                        type="email"></input>
                    <div className="text-red-500">This field must be a valid email address</div>
                </div>
            );
        } else {
            return (
                <div className="flex flex-col w-full pt-5">
                    <span className="dark:text-white">Your E-Mail</span>
                    <input
                        name="email"
                        disabled={this.state.sending}
                        value={this.state.email}
                        onChange={(event) => this.handleInputChange(event)}
                        className="border-blue-500 border-solid border-2 bg-transparent dark:text-white disabled:bg-gray-300/30 rounded"
                        type="email"></input>
                </div>
            );
        }
    }

    renderMessageField() {
        if (this.state.errors.message) {
            return (
                <div className="flex flex-col w-full pt-5 flex-auto">
                    <span className="dark:text-white">Your Message</span>
                    <textarea
                        name="message"
                        disabled={this.state.sending}
                        value={this.state.message}
                        onChange={(event) => this.handleInputChange(event)}
                        className="w-full h-full border-red-500 border-solid border-2 bg-transparent dark:text-white rounded" />
                    <div className="text-red-500">This field is required</div>
                </div>
            );
        } else {
            return (
                <div className="flex flex-col w-full pt-5 flex-auto">
                    <span className="dark:text-white">Your Message</span>
                    <textarea
                        name="message"
                        disabled={this.state.sending}
                        value={this.state.message}
                        onChange={(event) => this.handleInputChange(event)}
                        className="w-full h-full border-blue-500 border-solid border-2 bg-transparent dark:text-white disabled:bg-gray-300/30 rounded" />
                </div>
            );
        }
    }

    renderSendButton() {
        if (this.state.sending && !this.state.sendComplete) {
            return (
                <div className="pt-5 flex flex-row">
                    <div className="h-5 w-5 rounded-xl flex justify-center items-center border-solid border-black dark:border-white border dark:text-white"><span className="animate-spin text-2xl inline-block">&#9652;</span></div>
                    <div className="flex-auto ml-2 dark:text-white">Sending Your Message.</div>
                </div>
            );
        } else if (this.state.sendComplete) {
            return (
                <div className="pt-5 flex flex-row">
                    <div className="h-5 w-5 flex justify-center items-center dark:text-white"><span className="text-2xl inline-block">&#10003;</span></div>
                    <div className="flex-auto ml-2 dark:text-white">Sent!</div>
                </div>
            );
        } else {
            return (
                <div className="pt-5">
                    <button
                        onClick={() => this.sendEmail()}
                        disabled={this.state.sending}
                        className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded">Send</button>
                </div>
            );
        }
    }

    renderContactForm() {
        return (
            <div className={`flex flex-col justify-start items-center p-10 rounded relative ${styles['form-container']}`}>
                <button className="absolute top-5 right-5 text-2xl dark:text-white" onClick={() => this.closeContactForm()}>&otimes;</button>
                {this.renderSenderField()}
                {this.renderEmailField()}
                {this.renderMessageField()}
                {this.renderSendButton()}
            </div>
        );
    }

    render() {
        // If the game is not yet started, show the setup screen
        if (this.state.formOpen === false) {
            return (
                this.renderContactButton()
            );
        } else {
            // if the game is already started, display the game with existing details
            return (
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-100/50 flex justify-center items-center">
                    {this.renderContactForm()}
                </div>
            );
        }
    }
}
