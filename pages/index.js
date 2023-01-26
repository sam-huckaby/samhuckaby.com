import Head from 'next/head';
import Link from 'next/link';

import ContactButton from '../components/contactButton.component';

import styles from '/styles/index.module.scss';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-700">
      <Head>
        <title>Sam Huckaby - Sr. Software Engineer</title>
        <meta name="description" content="Professional profile for Sam Huckaby, Sr. Software Engineer" />
        <meta property="og:title" content="Sam Huckaby - Sr. Software Engineer" />
        <meta
          property="og:description"
          content="Professional profile for Sam Huckaby, Sr. Software Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-3 gap-2 w-full p-8 max-w-4xl">
        <div className="col-span-3 md:col-span-1">
          <div className="text-left"><h1 className="text-6xl font-bold dark:text-white"><p>Sam</p><p>Huckaby</p></h1></div>
          <div className="text-left text-red-500 dark:text-red-400 text-4xl font-bold">Sr. Software Engineer</div>
        </div>
        <div className="pt-5 pb-5 items-start md:items-center justify-end md:justify-center flex flex-col col-span-3 md:col-span-2">
          <ContactButton></ContactButton>
        </div>
        <div className={`${styles['label-top-border']} font-bold pt-3 pb-1 dark:text-white`}>
          <p>Profile</p>
        </div>
        <div className="pt-3 pb-1 border-t-4 border-black dark:text-white col-span-2">
          <p>A goal-oriented developer and a people person who likes to do things the right way. I specialize in making "techie" understandable to regular people. I have spent the last decade working in JavaScript and assorted libraries such as Angular/AngularJS and NodeJS both in team member and team lead roles. Right now my favorite libraries to work with are React and NextJS, though I am still (always) learning. I love a challenge, whether it’s working out how to use a library I don’t know, or just helping others reach their full potential as developers.</p>
        </div>
        <div className={`${styles['label-top-border']} font-bold pt-3 pb-1 dark:text-white`}>
          <p>Experience</p>
        </div>
        <div className="border-t-4 border-black flex flex-col col-span-2">
          <div className="pt-3 pb-1 dark:text-white">
            <div><span className="font-bold">Beyond Identity</span>&nbsp;/&nbsp;<span>Sr. Software Engineer</span></div>
            <div className="text-gray-500 dark:text-zinc-300 text-xs">March 2022 - PRESENT,  Remote, NY</div>
            <div className="pt-2 pb-2">Front-end developer specializing in React and NextJS. Working on web-based admin portals for secure workforce and secure customer product lines. Contributing member of a team of eight front-end developers who support the whole company.</div>
          </div>
          <div className="pt-3 pb-1 dark:text-white">
            <div><span className="font-bold">Comcast, Inc</span>&nbsp;/&nbsp;<span>Sr. Software Engineer</span></div>
            <div className="text-gray-500 dark:text-zinc-300 text-xs">June 2016 - March 2022,  Denver, CO</div>
            <div className="pt-2 pb-2">Full-stack Angular/NodeJS developer who brought multiple Java microservices together into a dynamic, web-based, advertising portal. The only UI developer on a team of nine.</div>
          </div>
          <div className="pt-3 pb-1 dark:text-white">
            <div><span className="font-bold">Levels Beyond</span>&nbsp;/&nbsp;<span>Software Engineer</span></div>
            <div className="text-gray-500 dark:text-zinc-300 text-xs">July 2015 - June 2016,  Denver, CO</div>
            <div className="pt-2 pb-2">Full-stack AngularJS/NodeJS developer who worked with a team of UI developers to ingest and utilize two main Java backend services.</div>
          </div>
          <div className="pt-3 pb-1 dark:text-white">
            <div><span className="font-bold">ClickFox</span>&nbsp;/&nbsp;<span>Software Engineer</span></div>
            <div className="text-gray-500 dark:text-zinc-300 text-xs">March 2014 - July 2015,  Denver, CO</div>
            <div className="pt-2 pb-2">AngularJS developer who worked to convert an Apache Flex app into HTML5/JS while also building new features. Managed an off-shore team in India of UI developers as well.</div>
          </div>
          <div className="pt-3 pb-1 dark:text-white">
            <div><span className="font-bold">ClickFox</span>&nbsp;/&nbsp;<span>Associate QA Engineer</span></div>
            <div className="text-gray-500 dark:text-zinc-300 text-xs">October 2013 - March 2014,  Denver, CO</div>
            <div className="pt-2 pb-2">Worked alongside a team of QA Engineers to leverage automated testing frameworks, such as SOAPUI and Selenium to test the existing Apache Flex UI, as well as handling manual testing as needed.</div>
          </div>
        </div>
        <div className={`${styles['label-top-border']} font-bold pt-3 pb-1 dark:text-white`}>
          <p>Education</p>
        </div>
        <div className="border-t-4 border-black flex flex-col col-span-2">
          <div className="pt-3 pb-1 dark:text-white">
            <div><span className="font-bold">Cameron University</span>&nbsp;/&nbsp;<span>Bachelors of Science (CS)</span></div>
            <div className="text-gray-500 dark:text-zinc-300 text-xs">August 2009 - May 2012,  Lawton, OK</div>
            <div className="pt-2 pb-2">My degree in Computer science focused most heavily on C-based languages, with the introduction of Java my senior year into the curriculum. I also minored in math, but I promise I’m not actually that boring.</div>
          </div>
        </div>
        <div className={`${styles['label-top-border']} font-bold pt-3 pb-1 dark:text-white`}>
          <p>Projects</p>
        </div>
        <div className="border-t-4 border-black flex flex-col col-span-2">
          <div className="pt-3 pb-1 dark:text-white">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col flex-auto">
                <div className="font-bold"><Link href="#" aria-label="A link to OSS.rip that isn't active yet" className="font-bold hover:text-red-500">OSS.rip</Link></div>
                <div className="text-gray-500 dark:text-zinc-300 text-xs"><a href="https://nextjs.org/" target="_blank">NextJS</a>, <a href="https://www.sanity.io/" target="_blank">Sanity</a>, <a href="https://vercel.com/" target="_blank">Vercel</a></div>
              </div>
              <div className="flex-auto flex flex-row justify-start md:justify-end items-center pt-2 md:pt-0 mr-2">
                <a href="https://github.com/sam-huckaby/oss.rip" aria-label="Visit the OSS.rip github repo" target="_blank" rel="noreferrer">
                  <img className="inline dark:hidden dark:w-0" src="/GitHub-Mark-32px.png" alt="github logo" height={32} width={32} />
                  <img className="hidden dark:inline" src="/GitHub-Mark-Light-32px.png" alt="github logo" height={32} width={32} />
                </a>
              </div>
            </div>
            <div className="pt-2 pb-2">A place for Open Source Software enthusiasts to find new software, as well as learn about and make fun of the software they love.</div>
          </div>
          <div className="pt-3 pb-1 dark:text-white">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col flex-auto">
                <div className="font-bold"><Link href="https://www.fuelpm.com/" aria-label="Visit the Fuel PM website" className="font-bold hover:text-red-500">Fuel PM (Project Management)</Link></div>
                <div className="text-gray-500 dark:text-zinc-300 text-xs"><a href="https://nextjs.org/" target="_blank">NextJS</a>, <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>, <a href="https://vercel.com/">Vercel</a>, <a href="https://supabase.com/" target="_blank">Supabase</a></div>
              </div>
              <div className="flex-auto flex flex-row justify-start md:justify-end items-center pt-2 md:pt-0 mr-2">
                <a href="https://github.com/sam-huckaby/fuelpm.com" aria-label="Visit the Fuel PM github repo" target="_blank" rel="noreferrer">
                  <img className="inline dark:hidden dark:w-0" src="/GitHub-Mark-32px.png" alt="github logo" height={32} width={32} />
                  <img className="hidden dark:inline" src="/GitHub-Mark-Light-32px.png" alt="github logo" height={32} width={32} />
                </a>
              </div>
            </div>
            <div className="pt-2 pb-2">Project management should fuel your organization, not slow it down and annoy it. Fuel is a mobile-first project management tool that is designed to be used as little as possible.</div>
          </div>
          <div className="pt-3 pb-1 dark:text-white">
            <div className="font-bold"><Link href="https://thatfit.me/" className="font-bold hover:text-red-500">thatfit.me</Link></div>
            <div className="text-gray-500 dark:text-zinc-300 text-xs"><a href="https://hydrogen.shopify.dev/" target="_blank">Hydrogen</a>, TBD</div>
            <div className="pt-2 pb-2">Recently acquired, still deciding what to build here. Looking for a new tech stack to try.</div>
          </div>
          <div className="pt-3 pb-1 dark:text-white">
            <div className="font-bold"><Link href="https://www.bitconquest.com/" className="font-bold hover:text-red-500">Bit Conquest</Link></div>
            <div className="text-gray-500 dark:text-zinc-300 text-xs"><a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>, TBD</div>
            <div className="pt-2 pb-2">Recently acquired, still deciding what to build here. Looking for a new tech stack to try.</div>
          </div>
          <div className="pt-3 pb-1 dark:text-white">
            <div className="font-bold"><Link href="https://onsocial.io/" className="font-bold hover:text-red-500">OnSocial.io</Link></div>
            <div className="text-gray-500 dark:text-zinc-300 text-xs">TBD</div>
            <div className="pt-2 pb-2">Recently acquired, still deciding what to build here. Looking for a new tech stack to try.</div>
          </div>
          <div className="pt-3 pb-1 dark:text-white">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col">
                <div className="font-bold"><Link href="https://sermons.forpreaching.com/" className="font-bold hover:text-red-500">For Preaching</Link></div>
                <div className="text-gray-500 dark:text-zinc-300 text-xs"><a href="https://angular.io/" target="_blank">Angular</a>, <a href="https://expressjs.com/" target="_blank">ExpressJS</a>, <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>, <a href="https://www.docker.com/" target="_blank">Docker</a>, <a href="https://aws.amazon.com/lightsail/" target="_blank">Amazon Lightsail</a></div>
              </div>
              <div className="flex-auto flex flex-row justify-start md:justify-end items-center pt-2 md:pt-0 mr-2">
                <a href="https://github.com/sam-huckaby/forpreaching-server" aria-label="Visit the ForPreaching server github repo" className="mr-2" target="_blank">
                  <img className="inline dark:hidden dark:w-0" src="/GitHub-Mark-32px.png" alt="Github logo" height={32} width={32} />
                  <img className="hidden dark:inline" src="/GitHub-Mark-Light-32px.png" alt="github logo" height={32} width={32} />
                </a>
                <a href="https://github.com/sam-huckaby/forpreaching-sermons" aria-label="Visit the ForPreaching sermon github repo" className="mr-2" target="_blank">
                  <img className="inline dark:hidden dark:w-0" src="/GitHub-Mark-32px.png" alt="github logo" height={32} width={32} />
                  <img className="hidden dark:inline" src="/GitHub-Mark-Light-32px.png" alt="github logo" height={32} width={32} />
                </a>
                <a href="https://github.com/sam-huckaby/forpreaching" aria-label="Visit the ForPreaching website github repo" className="mr-2" target="_blank">
                  <img className="inline dark:hidden dark:w-0" src="/GitHub-Mark-32px.png" alt="github logo" height={32} width={32} />
                  <img className="hidden dark:inline" src="/GitHub-Mark-Light-32px.png" alt="github logo" height={32} width={32} />
                </a>
                <a href="https://github.com/sam-huckaby/forpreaching-studies" aria-label="Visit the ForPreaching studies github repo" target="_blank">
                  <img className="inline dark:hidden dark:w-0" src="/GitHub-Mark-32px.png" alt="github logo" height={32} width={32} />
                  <img className="hidden dark:inline" src="/GitHub-Mark-Light-32px.png" alt="github logo" height={32} width={32} />
                </a>
              </div>
            </div>
            <div className="pt-2 pb-2">An app ecosystem for pastors and teachers to track illustrations, sermons, and study guides.</div>
          </div>
          <div className="pt-3 pb-1 dark:text-white">
            <div className="font-bold"><Link href="https://www.lostrequiem.com/" className="font-bold hover:text-red-500">Lost Requiem</Link></div>
            <div className="text-gray-500 dark:text-zinc-300 text-xs">TBD</div>
            <div className="pt-2 pb-2">[CURRENTLY OFFLINE] An online game I started building with PHP and JS about 20 years ago that never took off. Planning to repurpose this domain at some point.</div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center dark:text-white"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          aria-label="Check out Vercel, the company responsible for much of the tech this site is built on!"
          rel="noopener noreferrer"
        >
          Powered by&nbsp;
          <span className="bg-white pt-3 pr-3 pb-3 pl-0"><img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /></span>
        </a>
      </footer>
    </div>
  )
}
