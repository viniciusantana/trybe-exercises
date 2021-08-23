const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testando função uppercase', (done) => {
  uppercase('teste', (string) => {
    expect(string).toBe('TESTE');
    done();

  })
})