module.exports = {
  name: 'demo2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo2',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
