function fibonacci(n) {
  return n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
