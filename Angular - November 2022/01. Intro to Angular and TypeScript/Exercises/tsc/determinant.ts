function determinant(matrix: number[][]): number {
    const n = matrix.length;
    if (n !== matrix[0].length) {
        throw new Error('Matrix must be square');
    }
    if (n === 1) {
        return matrix[0][0];
    }
    let det = 0;
    for (let i = 0; i < n; i++) {
        const minor = matrix.slice(1).map(row => row.filter((_, j) => j !== i));
        det += matrix[0][i] * determinant(minor) * (i % 2 === 0 ? 1 : -1);
    }
    return det;
}
