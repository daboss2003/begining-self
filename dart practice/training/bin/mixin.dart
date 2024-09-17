import 'dart:mirrors';

void main(List<String> args) {
  final mr = Person(name: "John");
  mr.jump();

  final cats = <Cat>{
    Cat(age: 2, name: 'Kitkit'),
    Cat(age: 3, name: 'Jired'),
    Cat(age: 4, name: 'Mima'),
    Cat(age: 2, name: 'Kitkit')
  };

  print(cats);
}

mixin Jump {
  void jump() => print("jump");
}

class Person with Jump {
  final String name;

  Person({required this.name});
}

enum PetType { dog, cat, rat, goat, hen, turkey }

mixin Pet {
  String get name;
  int get age;
  PetType get type;

  @override
  String toString() => 'Pet ($type), name = $name, age = $age';

  @override
  int get hashCode => Object.hash(
        name,
        age,
        type,
      );

  @override
  bool operator ==(Object other) => other.hashCode == hashCode;
}

class Cat with Pet  {
  @override
  final int age;

  @override
  final String name;

  @override
  final PetType type;

  Cat({
    required this.age,
    required this.name,
  }) : type = PetType.cat;
}



extension AsKey on VariableMirror {
  String get asKey {
    final fieldName = MirrorSystem.getName(simpleName);
    final fieldType = MirrorSystem.getName(type.simpleName);
    return '$fieldName ($fieldType)';
  }
}

class House {
  final String address;
  final int rooms;

  const House({
    required this.address,
    required this.rooms,
  });
}
