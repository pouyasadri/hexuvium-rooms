import blockContent from './schemas/blockContent'
import city from "./schemas/city";
import {localeBlock, localeString} from "./schemas/localeStringType";
import apartment from "./schemas/apartment";

export const schema = {
    types: [city, localeString, apartment, blockContent,localeBlock],
}
