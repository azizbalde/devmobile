import WeatherService from '../services/weather-service';
let nextState;
export default function reducerService (state = nextState, action){

    
    serv = new WeatherService();
    this.serv.getWeatherHome().then((resp) => {
        this.setState({ nextState: resp.data });
    });
    switch(action.type)
    {
        case 'ADD_FAVORIS':
           const  fav = this.serv.getWeatherHome(this.state.cityName);
            if (nextState !== -1){
                nextState = {
                    ...state,
                    fav : [...state.fav, action.value]
                    
                }
            }
        default:  
            return state;
    }
}