function cityTaxes(n, p, t){
    const cityRecord = {
        name: n,
        population: p,
        treasury: t,
        taxRate: 10,
        collectTaxes() {this.treasury += Math.floor(this.population * this.taxRate)},
        applyGrowth(percentage) {this.population += Math.floor(percentage * this.population / 100)},
        applyRecession(percentage) {this.treasury -= Math.ceil(percentage * this.treasury / 100)}
    }

    return cityRecord;
}