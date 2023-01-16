import type { CountryInfo } from "./type";
import countries from "./data.json"

export function getAllCountryInfo(): CountryInfo[] {
    let allCountryInfo: CountryInfo[] = [];

    countries.forEach((country) => {
        let nativeName = getNativeName_(country.name.nativeName);
        let currencies = country.currencies ? getCurrencies_(Object.values(country.currencies)): [];

        let countryInfo: CountryInfo = {
            name: country.name.common,
            population: country.population,
            capital: country.capital ? country.capital[0] : '',
            region: country.region,
            flagImgSrc: country.flags.png,
            nativeName,
            subRegion: country.subregion ?? '',
            domain: country.tld ? country.tld[0] : '',
            currencies,
            borderCountries: country.borders ?? [],
            languages: country.languages ? Object.values(country.languages): []
        };
        allCountryInfo.push(countryInfo);
    });

    return allCountryInfo;
}

export function searchCountry(countryName: string): CountryInfo | undefined {
    const allCountryInfo = getAllCountryInfo();

    let countryInfo = allCountryInfo.find((countryInfo) => {
        return countryInfo.name.toLowerCase().includes(countryName.toLowerCase());
    });

    return countryInfo;
}

function getNativeName_(nativeNames_: any): string {
    let nativeName: string = '';
    if(!nativeNames_) return '';
    for (const key of Object.keys(nativeNames_)) {
        if (key !== 'eng') {
            nativeName = nativeNames_[key]?.common ?? '';
            break;
        }
    }
    return nativeName;
}

function getCurrencies_(currencies_: Array<any>): string[] {
    let currencies: string[] = [];
    currencies_.forEach((currency) => {
        if (currency.name) currencies.push(currency.name);
    });

    return currencies;
}
