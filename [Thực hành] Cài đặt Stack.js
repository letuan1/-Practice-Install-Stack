var Stack = function () {
  this.dataStore = [];
  this.top = 0;

  this.push = function (element) {
      this.dataStore[this.top++] = element;
  };

  this.pop = function () {
      return this.dataStore[--this.top];
  };

  this.peek = function () {
      return this.dataStore[this.top-1];
  };

  this.lenght = function () {
      return this.top;
  };

  this.clear = function () {
      this.top = 0;
  };
};

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
document.write("length: " + s.lenght() + "<br>");
document.write(s.peek());
var popped = s.pop();
document.write("The popped element is: " + popped + "<br>");
document.write(s.peek());

s.push("Cynthia");

document.write(s.peek());

s.clear();
document.write("length: " + s.lenght() + "<br>");
document.write(s.peek());

s.push("Clayton");

document.write(s.peek());
