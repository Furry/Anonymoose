
<center>
    <h1>
        Anonymoose
    </h1>


<a href="https://discord.gg/tamVs2Ujrf">
    <img src="https://discordapp.com/api/guilds/769020183540400128/widget.png?style=banner2" alt="Discord Banner 2"/>
</a>

![Discord Shield](https://img.shields.io/github/commit-activity/m/furry/anonymoose)
![Size](https://img.shields.io/bundlephobia/min/anonymoose)
![Downloads](https://img.shields.io/npm/dw/anonymoose)

</center>

<center>A Random Data Generation library. Who needs faker anyway.</center>

# Features:
## Anonymoose.
 - .Person
   - .SSN()
   - .firstName()
   - .lastName()
   - .fullName()
 - .Numeric
   - .int()
   - .templateInt()
 - .Web
   - .userAgent()
 - .Characters
   - .randomChars()

## Motive
With the tragic compromise of the library Faker, this package will act as a work-in-progress replacement, with strict typescript typings & support, as well as constant feature additions based on pull requests. Best part? This library is guarinteed not to go nuclear.

## Examples

```js
const Anonymoose = require("anonymoose");

Anonymoose.Person.firstName();
> Jane


Anonymoose.Web.UserAgent();
> Mozilla/8.8 (Macintosh; x64) Blink/8.2.9


Anonymoose.Numeric.templateInt("X", "A few random numbers are ###, ##, and ##.##!");
> "A few random numbers are 261, 75, and 46.21!"


Anonymoose.Utils.pick(["5", 3, "24", 7]);
> "24"

// Base64 | AlphaNumericUpper | AlphaNumericLower | AlphaNumericUpperLower | AlphabeticUpper | ect...
Anonymoose.Characters.randomChars(16, "Base64");
> "sPqv36+ng4kFCX9z0"

Anonymoose.Characters.randomChars(16, "Ef");
> "EffEffEEEffEffEE"
```


## Commit Guidelines
 - All Pull Requests are welcome! 
 - If adding a new feature, please use include it in the propper category. 
 - If reworking an existing feature, please make an issue before you do it.
 - If there's any issues or worries, make an issue and i'll get to it right away!

<hr>

<div style="text-align: center">
Enjoy what I do? feel free to support it!

<a href="https://www.buymeacoffee.com/ether" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
</div>