var fs = require('fs'),
	casper = require('casper').create();
if( casper.cli.args.length != 1 || !fs.isDirectory(casper.cli.args[0]) )
{
	casper.echo('directory missing...').exit();
}
var files = [];
recSearch(casper.cli.args[0]);
function recSearch(path)
{
	var list = fs.list(path);
	// begin with 2 because of . and ..
	if( list.length > 2 )
	{
		for(var x = 2; x < list.length; x++)
		{
			var file = path+'\\'+list[x];
			if(fs.isFile(file))
			{
				var extension = file.substring(file.lastIndexOf('.')+1);
				if( extension == 'jpg' || extension == 'jpeg' || extension == 'png' )
				{
					files.push(file);
				}
			}
			else if(fs.isDirectory(file))
			{
				recSearch(file);
			}
		}
	}
}
var args = {
	url: 'https://tinypng.com/',
	selectors: {
		upload: 'section.upload input[type=file]',
		download: 'section.files ul li div.after a',
		compression: 'section.files ul li div.after .saved'
	}
}
casper.start(args.url);
files.forEach(function(file)
{
	casper.then(function()
	{
	    this.page.uploadFile(args.selectors.upload, file);
	});
	casper.then(function()
	{
		this.waitForSelector(
			args.selectors.download,
			function()
			{
				var href = casper.evaluate(function(args)
				{
					return document.querySelector(args.selectors.download).getAttribute('href');
				},args);
				var saved = casper.evaluate(function(args)
				{
					return document.querySelector(args.selectors.compression).innerHTML.replace('−','');
				},args);
				this.download(href, file);
				this.echo('succesfully compressed file '+file+' with a compression of '+saved);
			},
			function()
			{
				this.echo('error with file '+file);
			},
			30000 // timeout
		);
	});
	casper.thenOpen(args.url);
});
casper.run();