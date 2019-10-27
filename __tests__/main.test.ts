
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

test('No logic defined', async() => {
    const input = parseInt('foo', 10);
    await expect(true).toBeTruthy();
});
