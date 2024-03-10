"use strict";
function describe_city(city = '', country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
describe_city('Istanbul', 'Turkey');
describe_city('Paris', 'France');
describe_city('Ghaza'); //this city is not in default country
