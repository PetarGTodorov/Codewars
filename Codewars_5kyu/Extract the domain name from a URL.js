//Write a function that when given a URL as a string, 
//parses out just the domain name and returns it as a string.
//For example: * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//             * url = "http://www.zombie-bites.com" -> domain name = "zombie-bites"
//             * url = "https://www.cnet.com" -> domain name = cnet"

function domainName(url){
    if(url.includes('//')){
    let splited = url.split('/');
    let domainName = splited[2]; 
    let domainArray = domainName.split('.');
    let result = domainArray[0];
    if(domainArray[0] === 'www'){
        return domainArray[1]
    } else {
    return result
    }
    } else {
        let splited = url.split('.');
        console.log(splited)
        if(splited[1] !== 'www' && splited.includes('www')){
            console.log(splited[1])
            return splited[1]
        } else {
            return splited[0]
        }
    }
}
domainName("yfhrvkq0bico371h5urynrmay.net/img/")