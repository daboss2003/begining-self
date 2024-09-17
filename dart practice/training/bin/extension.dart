// ignore_for_file: unused_element

void main(List<String> args) {}

extension on String {
  String get reversed => split('').reversed.join();
}

extension SomeL<T extends num> on Iterable<T> {
  T get sum => reduce((T value, T element) => value + element as T);
}

extension on int {
  Iterable<int> to(int end, {bool through = true}) => end > this
      ? [
          for (var i = this; i < end; i++)
            if (through) i,
          end
        ]
      : [
          for (var i = this; i > end; i--)
            if (through) i,
          end
        ];
}

extension on Iterable {
  bool get hasDuplicate => toSet().length != length;
}

extension on Enum {
  bool get hasUpperCase => name.contains(RegExp(r"[A-Z]"));
}


