var camel_to_kebab;

camel_to_kebab = function(str) {
  return str.replace(/([A-Z])/g, function($1) {
    return "-" + ($1.toLowerCase());
  });
};

module.exports = camel_to_kebab;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC9jYW1lbC10by1rZWJhYi5qcyIsInNvdXJjZXMiOlsidXRpbC9jYW1lbC10by1rZWJhYi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBQTs7QUFBQSxjQUFBLEdBQWlCLFNBQUMsR0FBRDtTQUNmLEdBQUcsQ0FBQyxPQUFKLENBQVksVUFBWixFQUF3QixTQUFDLEVBQUQ7V0FBUSxHQUFBLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBSCxDQUFBLENBQUQ7RUFBWCxDQUF4QjtBQURlOztBQUlqQixNQUFNLENBQUMsT0FBUCxHQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIiNodHRwczovL2dpdGh1Yi5jb20vZ29vZGVnZ3MvdGVhY3VwLWNhbWVsLXRvLWtlYmFiXG5jYW1lbF90b19rZWJhYiA9IChzdHIpIC0+XG4gIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csICgkMSkgLT4gXCItI3skMS50b0xvd2VyQ2FzZSgpfVwiKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxfdG9fa2ViYWJcbiJdfQ==
