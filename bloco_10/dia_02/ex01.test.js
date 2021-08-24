const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// resp:

test('Testando função uppercase', (done) => {
  uppercase('teste', (string) => {
    expect(string).toBe('TESTE');
    done();
  })
})

// Gabarito

/* it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});
 */