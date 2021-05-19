function constructionCrew(worker) {
    // 0.1ml per kilogram per year of experience.

    if (worker.dizziness == true){
        waterNeeded = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += waterNeeded;
        worker.dizziness = false;
    }

    return worker;
}

console.log(constructionCrew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }))



