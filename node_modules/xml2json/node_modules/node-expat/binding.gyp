{
  'targets': [
    {
      'target_name': 'node_expat',
      'sources': [ 'node-expat.cc' ],
      'include_dirs': [
        '<!(node -e "require(\'nan\')")'
      ],
      'dependencies': [
        'deps/libexpat/libexpat.gyp:expat'
      ]
    }
  ]
}
