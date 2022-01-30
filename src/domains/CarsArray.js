export default {
  cars: [
    {
      id: "1",
      name: "Mazda-6",
      fuel: "Бензин",
      consumption: "9 л на 100 км",
      capacity: "2.0 л",
      power: "198 лс",
      shiftBox: "Механика",
      price: "20 за сутки",
      madeCar: "2020",
      bodyType: "Седан",
      image: {
        image1: 'https://freebiescloud.com/wp-content/uploads/2022/01/Mazda-6-2021-3.png',
        image2: 'https://freebiescloud.com/wp-content/uploads/2022/01/Mazda-6-2021-2-300x181.png',
      }
    },
    {
      id: "2",
      name: "Hyundai Sonata",
      fuel: "Бензин",
      consumption: "7,7 л на 100 км",
      capacity: "2.0 л",
      power: "152 лс",
      shiftBox: "Автомат",
      price: "15 за сутки",
      madeCar: "2021",
      bodyType: "Седан",
      image: {
        image1: 'https://freebiescloud.com/wp-content/uploads/2021/06/Hyundai-Sonata-N-Line-2021-1-300x169.png',
        image2: 'https://freebiescloud.com/wp-content/uploads/2021/06/Hyundai-Sonata-N-Line-2021-2-300x169.png',
      }
    },
    {
      id: "3",
      name: "Hyundai i20",
      fuel: "Бензин",
      consumption: "5.7 л на 100 км",
      capacity: "1.4 л",
      power: "90 лс",
      shiftBox: "Механика",
      price: "10 за сутки",
      madeCar: "2019",
      bodyType: "Седан",
      image: {
        image1: 'https://freebiescloud.com/wp-content/uploads/2020/10/1-20.png',
        image2: 'https://freebiescloud.com/wp-content/uploads/2020/10/2-18.png',
      }
    },
    {
      id: "4",
      name: "Chevrolet Sonic",
      fuel: "Бензин",
      consumption: "7.5 л на 100 км",
      capacity: "1.6 л",
      power: "110 лс",
      shiftBox: "Механика",
      price: "12 за сутки",
      madeCar: "2021",
      bodyType: "Седан",
      image: {
        image1: 'https://freebiescloud.com/wp-content/uploads/2022/01/Chevrolet-Sonic-2020-2.png',
        image2: 'https://freebiescloud.com/wp-content/uploads/2022/01/Chevrolet-Sonic-2020-4-300x200.png',
      }
    },
  ],

  getCarById(id) {
    return this.cars.find(car => car.id === id )
  }
};
