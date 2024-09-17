// void main(List<String> args) {
//   const names = ['jane', 'monica','jason','michael','tomson','toronton'];

//   for (var i = 0; i < names.length; i++){
//     print(names[i]);
//   }

//  print("------------------");
//   for(var name in names){
//     print(name);
//   }

// print("------------------");

//   for(var name in names.reversed){
//     print(name);
//   }
//   print("------------------");

//   for (var name in names.where((name) => name.startsWith("t"))){
//     print(name);
//   }
//   print("------------------");

//   names.sublist(2).forEach(print);
//   print("------------------");
//   names.sublist(2,4).forEach(print);
//   print("------------------");

//   print("------------------");
//   final  age = [];
//   for( int i = 0; i < 15; i++){
//     age.add(i);
//   }

//    for (var num in age){
//     print("------------------");
//     print(num);
//   }

//   print("------------------");

// final namesLength = names.map((e) => e.length * 5);
// print(namesLength);

// final sum = namesLength.fold(0, ( previousValue, element) => previousValue + element);
// print(sum);

// }

//--------------------- Sets----------------------------------------//
// import 'package:collection/collection.dart';
// void main(List<String> args) {
//   final age1 = {15,60,95,58,99,66,55,24};
//   final age2 = {15,60,95,58,99,66,55,24};
//   if(SetEquality().equals(age1, age2)){
//     print("Equal");
//   }
//   else{
//     print("Not Equal");
//   }
// }

//-----------------------------Object oriented sets----------------------------\\

// void main(List<String> args) {
//   final person1 = Person(name: 'jane', age: 27);
//   final person2 = Person(name: 'femi', age: 20);
//   print(person1);
//   print(person2);
// }

// class Person {
//   final String name;
//   final int age;

//   Person({required this.name, required this.age});

//   @override
//   String toString() => "Person: $name, $age";

//   @override
//   int get hashCode => Object.hash(name, age);

//   @override
//   bool operator == (Object other) => identical(this, other) || other is Person && name == other.name && age == other.age;
// }

//-------------------------MAPS IN DART---------------\\

// void main(List<String> args) {
//   final myMap = {
//     'name': "john",
//     'age': 60,

//   };

//   print(myMap['name']);

//   myMap.putIfAbsent('height', () => 180);
// }

//-------------------------------- Iterables---------------------------\\

// void main(List<String> args) {
//   final iterables = Iterable.generate(30, (i) => getName(i));
//   for (final name in iterables.take(5)){
//     print(name);
//   }
// }

// String getName(int i){
//   return('name #$i');
// }

//---------------------------------Iterables and lists-------------------------------\\

// void main(List<String> args) {
//   const names = ['jean','sasha','julia','ingrid'];// List at first but got converted to iterables when called with the map method
//   final uppercase  = names.map((name) => name.toUpperCase());// Iterables created from a list
//   for (final name in uppercase.take(2)){
//     print(name);
//   }

// }

//--------------------------------------------Unmodifiable lists in dart-------------------------------------------------\\

// import 'package:collection/collection.dart';
// void main(List<String> args) {
//   final modifiable = ['jane', 'monica','jason','michael','tomson','toronton'];
//   final unmodifiable = UnmodifiableListView(modifiable);
// }

//-----------------------------Unmodifiable Maps in dart---------------------------------\\

// import 'package:collection/collection.dart';
// void main(List<String> args) {
//   final fmap = {
//     'name': 'matilda',
//     'age': 50,
//     'children':{
//       'son': 'john',
//       'daughter': 'casandra'
//     }
//   };

//   final fmap2 = UnmodifiableMapView(fmap);

// }

//------------------------------CREATING ITERABLES IN DART-----------------------------\\

// void main(List<String> args) {
//   for(final name in getNames()){
//     print(name);
//   }
// }

// Iterable<String> getNames() sync*{
//   yield 'man';
//   yield 'woman';
//   yield 'child';
//   yield* templates();
// }

// Iterable<String> templates() sync*{
//   yield 'babies';
//   yield 'dog';
//   yield 'cats';
// }

//-------------------Spread Operators in dart-------------------------------\\

// void main(List<String> args) {
//   joinLists();
// }

// void joinLists(){
//   final list1 = [15,60,95,58,99,66,55,24];
//   final list2 = list1.reversed;
//   final list3 = [...list2,...list1];
//   print(list1);
//   print('-----------------------------');
//   print(list2);
//   print('-----------------------------');
//   print(list3);
//   print('-----------------------------');
// }


