import { ConditionDisplay } from './conditionDisplay';
import { ForecastDisplay } from './forecastDisplay';
import { StatisticsDisplay } from './statisticsDisplay';
import { WeatherData } from './weatherData';
import { WeatherStation } from './weatherStation';

describe('[Observer - begin] Weather station measurement changed', () => {
  it('display should be called when measurement changed', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);

    // when
    weatherStation.update(data);

    // then
    expect(weatherStation.updateCurrentConditionsDisplay()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );
    expect(weatherStation.updateStatisticsDisplay()).toBe(
      'Avg/Max/Min temperature = 32/0.8/1'
    );
    expect(weatherStation.updateForecastDisplay()).toBe(
      'Forecast: More of the same'
    );
  });

  it('should display condition when weather station data changed', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);
    const observer = new ConditionDisplay();
    weatherStation.registerObserver(observer);

    // when
    weatherStation.update(data);

    // then
    expect(observer.display()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );
  });

  it('should display on all display when weather station data changed', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);

    const observerCondition = new ConditionDisplay();
    const observerStatistics = new StatisticsDisplay();
    const observerForecas = new ForecastDisplay();
    weatherStation.registerObserver(observerCondition);
    weatherStation.registerObserver(observerStatistics);
    weatherStation.registerObserver(observerForecas);

    // when
    weatherStation.update(data);

    // then
    expect(observerCondition.display()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );
    expect(observerStatistics.display()).toBe(
      'Avg/Max/Min temperature = 32/0.8/1'
    );
    expect(observerForecas.display()).toBe('Forecast: More of the same');
  });
});
