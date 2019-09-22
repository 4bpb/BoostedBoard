var request = require('request');
const chalk = require('chalk');
function main(email,collegeDomain,coupons) {
    
    const options = {
        url: `https://boostedboards.com/api/subscribe`,
        method: 'POST',
        headers: {
            'appversion': '0.1',
            'appos': 'web',
            'x-requested-with': 'XMLHttpRequest',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-US,en;q=0.9'
        },
        form : {
            "id":"HCDBmH","data":[{"email":email+"+"+Math.floor(Math.random() * 1000)+"@"+collegeDomain,"sign_up_source":"student2"}]
        }
    }
    var i;
    for (i=0; i < coupons; i++){
        request(options, (error, response) => {
            if(error) {
                console.log(chalk.underline.red.bold("Error"))
            }
            if(response.statusCode === 200) {
                console.log(chalk.bold.green("Success"))
            }

        })
    }
}

main("exampleName","Example.edu","500")