import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { api } from "./AxiosService.js";

class CarsService {
  async editCar(carData) {
    let res = await api.put(`/cars/${carData.id}`, carData)
    let car = new Car(res.data)
    let carIndex = ProxyState.cars.findIndex(c => c.id == carData.id)
    ProxyState.cars.splice(carIndex, 1, car)
    ProxyState.cars = ProxyState.cars
  }

  async getCars() {
    let res = await api.get('/cars')
    ProxyState.cars = res.data.map(c => new Car(c))
  }

  async createCar(carFormData) {

    let res = await api.post('/cars', carFormData)
    let car = new Car(res.data)
    ProxyState.cars = [...ProxyState.cars, car]
  }

  async deleteCar(carId) {
    let url = `/cars/${carId}`
    await api.delete(url)
    ProxyState.cars = ProxyState.cars.filter(c => c.id != carId)
  }

}

export const carsService = new CarsService()