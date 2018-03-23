describe("The oldest function", function(){

  it("should return Xola that is the oldest person in the list", function(){

    var people = [{ name : "Xola", age : 31}, { name : "Lindani", age : 29}];
    assert.equal("Xola", oldest(people));

  });

  it("should return Lindani that is the oldest person in the list", function(){

    var people = [{ name : "Xola", age : 27}, { name : "Lindani", age : 29}];
    assert.equal("Lindani", oldest(people));

  });

  it("should find the oldest person in a bigger list", function(){

    var people = [{ name : "Yegan", age : 17}, { name : "Londiwe", age : 36},
      { name : "Siya", age : 27}, { name : "Lindani", age : 39},
      { name : "Ludwe", age : 25}, { name : "Ntando", age : 30}];

    assert.equal("Lindani", oldest(people));

  });

  it("should not give an error on an empty list", function(){

    var people = [];
    assert.equal("", oldest(people));

  });

});
