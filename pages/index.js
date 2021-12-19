import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sam Huckaby - Sr. Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-2 gap-2 w-full p-8 max-w-4xl">
        <div>
          <div className="text-left"><h1 className="text-6xl font-bold"><p>Sam</p><p>Huckaby</p></h1></div>
          <div className="text-left text-red-500 text-4xl font-bold">Sr. Software Engineer</div>
        </div>
        <div className="pt-5 pb-5 border-t-4 border-black items-center justify-items-center flex">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get In Touch</button>
        </div>
        <div className="font-bold">
          <p>---</p>
          <p>Profile</p>
        </div>
        <div className="pt-5 pb-5 border-t-4 border-black">
          <p>A goal-oriented developer and a people person who likes to do things the right way. I have spent the last decade working in JavaScript and assorted libraries such as AngularJS, NodeJS, some React, and some NextJS. I love a challenge, whether it’s working out how to use a library I don’t know, or just helping others reach their full potential as developers.</p>
        </div>
        <div className="font-bold">
          <p>---</p>
          <p>Experience</p>
        </div>
        <div className="border-t-4 border-black flex flex-col">
          <div className="pt-3 pb-1">
            <div><span className="font-bold">Comcast, Inc</span>&nbsp;/&nbsp;<span>Sr. Software Engineer</span></div>
            <div className="text-gray-500 text-xs">June 2016 - PRESENT,  Denver, CO</div>
            <div className="pt-2 pb-2">Full-stack Angular/NodeJS developer who brought multiple Java microservices together into a dynamic, web-based, advertising portal. The only UI developer on a team of nine.</div>
          </div>
          <div className="pt-3 pb-1">
            <div><span className="font-bold">Levels Beyond</span>&nbsp;/&nbsp;<span>Software Engineer</span></div>
            <div className="text-gray-500 text-xs">July 2015 - June 2016,  Denver, CO</div>
            <div className="pt-2 pb-2">Full-stack AngularJS/NodeJS developer who worked with a team of UI developers to ingest and utilize two main Java backend services.</div>
          </div>
          <div className="pt-3 pb-1">
            <div><span className="font-bold">ClickFox</span>&nbsp;/&nbsp;<span>Software Engineer</span></div>
            <div className="text-gray-500 text-xs">March 2014 - July 2015,  Denver, CO</div>
            <div className="pt-2 pb-2">AngularJS developer who worked to convert an Apache Flex app into HTML5/JS while also building new features. Managed an off-shore team in India of UI developers as well.</div>
          </div>
          <div className="pt-3 pb-1">
            <div><span className="font-bold">ClickFox</span>&nbsp;/&nbsp;<span>Associate QA Engineer</span></div>
            <div className="text-gray-500 text-xs">October 2013 - March 2014,  Denver, CO</div>
            <div className="pt-2 pb-2">Worked alongside a team of QA Engineers to leverage automated testing frameworks, such as SOAPUI and Selenium to test the existing Apache Flex UI, as well as handling manual testing as needed.</div>
          </div>
        </div>
        <div className="font-bold">
          <p>---</p>
          <p>Education</p>
        </div>
        <div className="border-t-4 border-black flex flex-col">
          <div className="pt-3 pb-1">
            <div><span className="font-bold">Cameron University</span>&nbsp;/&nbsp;<span>Bachelors of Science - Computer Science</span></div>
            <div className="text-gray-500 text-xs">August 2009 - May 2012,  Lawton, OK</div>
            <div className="pt-2 pb-2">My degree in Computer science focused most heavily on C-based languages, with the introduction of Java my senior year into the curriculum. I also minored in math, but I promise I’m not actually that boring.</div>
          </div>
        </div>
        <div className="font-bold">
          <p>---</p>
          <p>Projects</p>
        </div>
        <div className="border-t-4 border-black flex flex-col">
          <p className="font-bold">TCG Online</p>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
