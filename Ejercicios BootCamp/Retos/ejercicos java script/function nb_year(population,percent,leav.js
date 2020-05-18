function nb_year(population, percent, leavers, population_to_reach) {
    var years;
    var poblacion = population;

    for (years = 0; poblacion < population_to_reach; ++years) {
        poblacion = poblacion + (poblacion * (percent / 100)) + leavers;

    }
    return years;
}
nb_year(1500, 5, 100, 5000);