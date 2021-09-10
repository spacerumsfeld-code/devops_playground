## Devops Playground Disguised as Yet Another Todo App

### Makefile

1. A list of custom-designed shell commands
2. As it is a unix tool, a bunch of extra configuration is needed to use on windows. Not my problem.
3. Provided are sample commands for firing up a fully containerized monorepo
4. The internet has mixed opinions on makefiles but I found them pretty cool
5. Simply type "make [your command name]" to run a command!
6. Helpful for automating regular operations, more readable and more flexible than npm scripts

(further reading) </br>
https://en.wikipedia.org/wiki/Make_(software) </br>
https://opensource.com/article/18/8/what-how-makefile#:~:text=The%20make%20utility%20requires%20a,be%20installed%20using%20make%20install%20.</br>
https://www.gnu.org/software/make/manual/html_node/Introduction.html</br>
https://makefiletutorial.com/</br>
http://www.conifersystems.com/whitepapers/gnu-make/

### Lerna

1. A tool for managing cross-dependencies in projects
2. lerna init initalizes a 'packages' repo where your (micro)services and projects will reside
3. The lerna.json file specifies which packages will be cross-linked when the command 'lerna bootstrap' is run. This command will install all dependencies out of the package.json in each project and cross-link them!
4. Lerna run [command] will run npm scripts in the package.json's of all specified packages in the lerna.json file (see "make dev" command for a demonstration)
5. Run lerna publish to publish a "version" of the monorepo with all dependencies tracked. Create new versions as packages get updates (version number will reflect in root package.json)

(further reading)</br>
https://lerna.js.org/</br>
https://codefresh.io/howtos/lerna-monorepo/</br>
https://semaphoreci.com/blog/javascript-monorepos-lerna

### Docker

1. Docker is, as we all know, a tool for containerizing development.
2. After docker is installed, you can build an "image" out of a Dockerfile in a directory with the "docker build" command. A Dockerfile is simply a list of instructions for the image as it is built as well as specification of the behavior of a container running that image.
3. In our case, both the API and CLIENT (web) side of the application have Dockerfiles which instruct Docker to install vim (so we can modify files inside the container as it is running), install dependencies, expose the proper ports so that we as developer have access to the container as desired and so that the containers can speak to one another, and finally, a command to run upon built success (CMD), which in our case instructs each container to start its respective application!
4. Going up one more level of abstraction, the docker-compose file is a means for orchestrating multiple images/containers in a cohesive developer environment. To fire up a docker-compose file, run "docker-compose up" in its directory, or if you want it to build the images referred to as well, add the --build flag as we do here.
5. Each "service" gets a name in this environment, which other containers can then refer to as shorthand in their code (if you look at database initialization in /api, for example, it connects to 'database'). We are also specifying where these services are to be built (I.E., referring to where their Dockerfiles are), what ports each service should expose, and what order they should be built in. The images in the docker-compose file get their own network upon launching, unless specified otherwise.
6. In the case of 'database', we pull from the mongodb image and build a new database image out of it. No Dockerfile needed!
7. P.S. the Docker desktop GUI makes monitoring a docker-compose network and jumping in and out of its included containers a breeze.

(further reading) </br>
https://docs.docker.com/get-started/ </br>
https://docs.docker.com/compose/
