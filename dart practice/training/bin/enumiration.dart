//Learning About Enums in darts--------\\

// void main(List<String> args) {
//   final woof = Animal(
//     name: 'Woof',
//     type: AnimalType.dog,
//   );

// }

// enum AnimalType {
//   rabbit,
//   dog,
//   cat,
//   cow,
//   monkey,
// }

// class Animal {
//   final String name;
//   final AnimalType type;

//   const Animal({
//     required this.name,
//     required this.type,
//   });
// }

//---------------------------Enhanced Enums in Dart-------------------\\

// void main(List<String> args) {
//   final dele = Person(name: 'Dele', age: 21, car: Car.teslaModelX);
//   final john = Person(name: 'John', age: 31, car: Car.teslaModelY);
//   final sandra = Person(name: 'Sandra', age: 26, car: Car.teslaModelA2);
//   print('${dele.name} is ${dele.age} and driving a ${dele.car.manufacturer} ${dele.car.model}  of year ${dele.car.year}');
//   print('${john.name} is ${john.age} and driving a ${john.car.manufacturer} ${john.car.model}  of year ${john.car.year}');
//   print('${sandra.name} is ${sandra.age} and driving a ${sandra.car.manufacturer} ${sandra.car.model}  of year ${sandra.car.year}');

// }

// class Person {
//   final String name;
//   final int age;
//   final Car car;

//   const Person({
//     required this.name,
//     required this.age,
//     required this.car,
//   });

  
// }

// enum Car {
//   teslaModelX(
//     manufacturer: 'Tesla',
//     model: 'Model X',
//     year: 2023,
//   ),
//   teslaModelY(
//     manufacturer: 'Tesla',
//     model: 'Model Y',
//     year: 2027,
//   ),
//   teslaModelA2(
//     manufacturer: 'Tesla',
//     model: 'Model A2',
//     year: 2015,
//   );

//   final String manufacturer;
//   final String model;
//   final int year;

//   const Car({
//     required this.manufacturer,
//     required this.model,
//     required this.year,
//   });

//   @override 
//   String toString() => '$manufacturer $model $year';
// }









//--------------------------compairing a string with the name of an enum value---------------------------------\\

// void main(List<String> args) {
//   print(animalType(fromStr: 'cat'));
// }

// AnimalType? animalType({required String fromStr,}){
//   try{
//     return AnimalType.values.firstWhere((element) => element.name == fromStr);
//   } catch(e){
//     return null;
//   }
  
// }

// enum AnimalType{
//   dog,
//   cat,
//   rat,
// }



