import LocaleService from 'services/LocaleService';
import {Resume as ResumePTBR} from './data/ResumeData.brBR';
import {Resume as ResumeEN} from './data/ResumeData.en';

class ResumePageService {

    static getContent(){
        if(LocaleService.isLocale(LocaleService.locales.ptBR))
            return ResumePTBR;
        else
            return ResumeEN;
    }

}

export default ResumePageService;