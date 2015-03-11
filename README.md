# generator-chrisopedia

Yeoman Generator for @chrisopedia's Personal Development

## Requirements

* [node](http://nodejs.org/) & [npm](https://www.npmjs.org/) - Install via Homebrew (`brew install node`)
* [yeoman](http://yeoman.io/) - Install via npm (`npm install -g yo`)
* [bower](http://bower.io) - Install via npm (`npm install -g bower`)
* [grunt](http://gruntjs.com/) - Install via npm (`npm install -g grunt-cli`)

## Setup

1. Clone the repository.

	```bash
	$ git clone https://github.com/chrisopedia/generator-chrisopedia.git .
	```

	This will download the repository to the current working directory using Git
	over HTTPS. If you'd prefer, you can use
	[SSH](git@github.com:chrisopedia/generator-chrisopedia.git) and change the
	directory to whatever you feel comfortable.  It won't matter as in the next
	step we'll make this a global module for use across your entire system.

2. Symlink the library as a global module.

	```bash
	$ cd generator-chrisopedia \
		&& npm link
	```

	After this finishes running its processes, you'll be able to run the
	generator as a global module.

3. Create your project directory and run `yo`.

	```bash
	$ appdir=application-<appname> \
		&& mkdir ${appdir} \
		&& cd ${appdir} \
		&& yo chrisopedia
	```
