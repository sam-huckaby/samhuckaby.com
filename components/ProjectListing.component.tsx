import Link from "next/link";
import React from "react";

export interface Tech {
	name: string;
	link: string;
};

export interface ProjectProps {
	name: string;
	link: string;
	tech: Tech[];
	repos: string[];
	description: string;
};

export const ProjectListing = ({ name, link, tech, repos, description }: ProjectProps) => {
	return (
		<div className="pt-3 pb-1 dark:text-white">
			<div className="flex flex-col md:flex-row">
				<div className="flex flex-col flex-auto">
					<div className="font-bold"><Link href={link}  aria-label="Visit the project"className="font-bold text-red-500">{name}</Link></div>
					<div className="w-full flex flex-row justify-start items-center flex-wrap dark:text-zinc-300 text-xs">
						{tech.map(({ name, link }) => <a key={name} href={link} target="_blank" className="hover:text-black dark:hover:text-white p-2 pl-0 underline">{name}</a>)}
					</div>
				</div>
				<div className="flex-auto flex flex-row justify-start md:justify-end items-center pt-2 md:pt-0 mr-2">
					{repos.map((url) => (
						<a key={url} href={url} aria-label="Visit the github repo" target="_blank" rel="noreferrer">
							<img className="inline dark:hidden dark:w-0" src="/GitHub-Mark-32px.png" alt="github logo" height={32} width={32} />
							<img className="hidden dark:inline" src="/GitHub-Mark-Light-32px.png" alt="github logo" height={32} width={32} />
						</a>
					))}
				</div>
			</div>
			<div className="pt-2 pb-2">{description}</div>
		</div>
	);
};
