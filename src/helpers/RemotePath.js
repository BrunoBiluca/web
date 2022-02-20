import { storagePath as storagePathConfig} from "../config/server"

export function storagePath(endpoint){
    return storagePathConfig + endpoint;
}