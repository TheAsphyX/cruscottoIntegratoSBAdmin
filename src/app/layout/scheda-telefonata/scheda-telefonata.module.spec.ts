import { SchedaTelefonataModule } from './scheda-telefonata.module';

describe('BlankPageModule', () => {
    let blankPageModule: SchedaTelefonataModule;

    beforeEach(() => {
        blankPageModule = new SchedaTelefonataModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
