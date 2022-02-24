import {
    constraintNumberTypeSchema,
    constraintStringTypeSchema,
} from './constraint-value-types';

/* Number type */
test('should require number', async () => {
    try {
        await constraintNumberTypeSchema.validateAsync('test');
    } catch (error) {
        expect(error.details[0].message).toEqual('"value" must be a number');
    }
});

test('should allow strings that can be parsed to a number', async () => {
    await constraintNumberTypeSchema.validateAsync('5');
});

test('should allow floating point numbers', async () => {
    await constraintNumberTypeSchema.validateAsync(5.72);
});

test('should allow numbers', async () => {
    await constraintNumberTypeSchema.validateAsync(5);
});

test('should allow negative numbers', async () => {
    await constraintNumberTypeSchema.validateAsync(-5);
});

/* String types */
test('should require a list of strings', async () => {
    try {
        await constraintStringTypeSchema.validateAsync(['test', 1]);
    } catch (error) {
        expect(error.details[0].message).toEqual('"[1]" must be a string');
    }
});

test('should succeed with a list of strings', async () => {
    await constraintStringTypeSchema.validateAsync([
        'test',
        'another-test',
        'supervalue',
    ]);
});
