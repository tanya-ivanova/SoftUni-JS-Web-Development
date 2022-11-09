function attachEvents() {
    const location = document.getElementById('location');
    const submitButton = document.getElementById('submit');
    let divForecast = document.getElementById('forecast');
    let divCurrent = document.getElementById('current');
    let divUpcoming = document.getElementById('upcoming');

    let divCurrentForecasts = document.createElement('div');
    let divUpcomingForecastInfo = document.createElement('div');

    submitButton.addEventListener('click', getWeather);

    async function getWeather(event) {
        divCurrentForecasts.innerHTML = '';
        divUpcomingForecastInfo.innerHTML = '';

        try {
            const responseLocations = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
            if (responseLocations.ok === false) {
                throw new Error('Error');
            }
            
            const locations = await responseLocations.json();

            const inputLocation = locations.find(l => l.name === location.value);
            location.value ='';
            const codeLocation = inputLocation.code;

            if(inputLocation === undefined) {
                throw new Error('Error');
            }

            const resCurrentConditons = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${codeLocation}`);
            if (resCurrentConditons.ok === false) {
                throw new Error('Error');
            }

            const dataCurrentConditions = await resCurrentConditons.json();

            const res3DayForecast = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${codeLocation}`);
            if (res3DayForecast.ok === false) {
                throw new Error('Error');
            }

            const data3DayForecast = await res3DayForecast.json();

            divForecast.style.display = 'block';
            
            divCurrentForecasts.classList.add('forecasts');
            let spanCurrentConditionSymbol = document.createElement('span');
            spanCurrentConditionSymbol.classList.add('condition');
            spanCurrentConditionSymbol.classList.add('symbol');
            if(dataCurrentConditions.forecast.condition === 'Sunny') {
                spanCurrentConditionSymbol.textContent = '\u2600';
            } else if(dataCurrentConditions.forecast.condition === 'Partly sunny') {
                spanCurrentConditionSymbol.textContent = '\u26C5';
            } else if(dataCurrentConditions.forecast.condition === 'Overcast') {
                spanCurrentConditionSymbol.textContent = '\u2601';
            } else if(dataCurrentConditions.forecast.condition === 'Rain') {
                spanCurrentConditionSymbol.textContent = '\u2614';
            }
            let spanCurrentCondition = document.createElement('span');
            spanCurrentCondition.classList.add('condition');
            let spanCurrentDataLocation = document.createElement('span');
            spanCurrentDataLocation.classList.add('forecast-data');
            spanCurrentDataLocation.textContent = dataCurrentConditions.name;
            let spanCurrentDataDegrees = document.createElement('span');
            spanCurrentDataDegrees.classList.add('forecast-data');
            spanCurrentDataDegrees.textContent = `${dataCurrentConditions.forecast.low}°/${dataCurrentConditions.forecast.high}°`;
            let spanCurrentDataCondition = document.createElement('span');
            spanCurrentDataCondition.classList.add('forecast-data');
            spanCurrentDataCondition.textContent = dataCurrentConditions.forecast.condition;
            spanCurrentCondition.appendChild(spanCurrentDataLocation);
            spanCurrentCondition.appendChild(spanCurrentDataDegrees);
            spanCurrentCondition.appendChild(spanCurrentDataCondition);
            divCurrentForecasts.appendChild(spanCurrentConditionSymbol);
            divCurrentForecasts.appendChild(spanCurrentCondition);
            divCurrent.appendChild(divCurrentForecasts);

            divUpcomingForecastInfo.classList.add('forecast-info');
            data3DayForecast.forecast.forEach(el => {
                let spanUpcoming = document.createElement('span');
                spanUpcoming.classList.add('upcoming');
                let spanUpcomingSymbol = document.createElement('span');
                spanUpcomingSymbol.classList.add('symbol');
                if(el.condition === 'Sunny') {
                    spanUpcomingSymbol.textContent = '\u2600';
                } else if(el.condition === 'Partly sunny') {
                    spanUpcomingSymbol.textContent = '\u26C5';
                } else if(el.condition === 'Overcast') {
                    spanUpcomingSymbol.textContent = '\u2601';
                } else if(el.condition === 'Rain') {
                    spanUpcomingSymbol.textContent = '\u2614';
                }
                let spanUpcomingDegrees = document.createElement('span');
                spanUpcomingDegrees.classList.add('forecast-data');
                spanUpcomingDegrees.textContent = `${el.low}°/${el.high}°`;
                let spanUpcomingCondition = document.createElement('span');
                spanUpcomingCondition.classList.add('forecast-data');
                spanUpcomingCondition.textContent = el.condition;
                spanUpcoming.appendChild(spanUpcomingSymbol);
                spanUpcoming.appendChild(spanUpcomingDegrees);
                spanUpcoming.appendChild(spanUpcomingCondition);
                divUpcomingForecastInfo.appendChild(spanUpcoming);
            })
            divUpcoming.appendChild(divUpcomingForecastInfo);
        

        } catch (error) {
            divForecast.style.display = 'block'
            divForecast.innerHTML = '';
            divForecast.textContent = 'Error';
        }
    }
}

attachEvents();