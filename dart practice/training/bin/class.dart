void main(List<String> args) {
  const michael = Person(firstname: 'Michael', age: 30, number: 09024057709,lastname: "Prince");
  print(michael.description);
}

class Person {
  final String firstname;
  final String lastname;
  final int age;
  final int number;
  final String fullname;
  String get description => '$firstname $lastname is a person in the age range of $age and has their phoneNo as $number';

  const Person({
    required this.firstname,
    required this.lastname,
    required this.age,
    required this.number,
  }): fullname = "$firstname $lastname";
}

class Vehicle {
  final int wheelCount = 9;
  int _speed = 0;

  int get speed => _speed;
  set speed(int newspeed){
    if(newspeed < 2){
      throw Exception("Speed is too low");
    }else{
      _speed = newspeed;
    }
  }
}


