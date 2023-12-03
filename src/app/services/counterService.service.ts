export class CounterService {
    activeToInactive: number = 0;
    inactiveToActive: number = 0;

    public incrementActiveToInactive(): void {
        this.activeToInactive++;
        console.log('Active to Inactive :' + this.activeToInactive);

    }
    public incrementInactiveToActive(): void {
        this.inactiveToActive++;
        console.log('Inactive to Active :' + this.inactiveToActive);

    }
}