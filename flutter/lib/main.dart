// Copyright 2018 The Flutter team. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'dart:io' as io;
import 'dart:ffi';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';
import 'montecarlo_bridge.dart';

// Pick the DLL/dynamic library filename
final _dylib = io.Platform.isWindows ? 'montecarlo.dll' : 'libmontecarlo.so';
final _api = DynamicLibrary.open(_dylib);
final _drawdown = DrawdownRustImpl(_api);

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // #docregion build
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Welcome to Flutter'),
        ),
        body: const Center(
          child: MyResults(),
        ),
      ),
    );
  }
  // #enddocregion build
}
// #enddocregion MyApp

class MyResults extends StatefulWidget {
  const MyResults({Key? key}) : super(key: key);

  @override
  State<MyResults> createState() => _MyResultsState();
}

class _MyResultsState extends State<MyResults> {
  final _simulationConfig = SimulationConfig(
      savings: 3000000,
      withdrawalRate: 0.04,
      stocks: 0.7,
      bonds: 0.2,
      cash: 0.1,
      simulationRounds: 100000,
      simulationYears: 50,
      quantiles: 4);

  String results = "";

  @override
  void initState() {
    super.initState();
    // set state
    _runSimulationRust();
  }

  @override
  Widget build(BuildContext context) {
    //_runSimulationRust();
    return Text(results);
  }

  Future<void> _runSimulationRust() async {
    final simulationResults =
        await _drawdown.simulation(simulationConfig: _simulationConfig);

    final sb = StringBuffer();
    for (var r in simulationResults.years) {
      sb.writeln(
          "${r.year}: Min ${(r.min / 1000000).floor()}M / Max ${(r.max / 1000000).floor()}M / Avg ${(r.mean / 1000000).floor()}M / Median ${(r.median / 1000000).floor()}M / Stddev ${(r.stddev / 1000000).floor()}M");
    }
    setState(() => results = sb.toString());
  }
}
// class RandomWords extends StatefulWidget {
//   const RandomWords({super.key});

//   @override
//   State<RandomWords> createState() => _RandomWordsState();
// }

// class _RandomWordsState extends State<RandomWords> {
//   final _suggestions = <WordPair>[];
//   final _biggerFont = const TextStyle(fontSize: 18);

//   @override
//   Widget build(BuildContext context) {
//     // final wordPair = WordPair.random();
//     // return Text(wordPair.asPascalCase);

//     return ListView.builder(
//       padding: const EdgeInsets.all(16.0),
//       itemBuilder: /*1*/ (context, i) {
//         if (i.isOdd) return const Divider(); /*2*/

//         final index = i ~/ 2; /*3*/
//         if (index >= _suggestions.length) {
//           _suggestions.addAll(generateWordPairs().take(10)); /*4*/
//         }
//         return ListTile(
//           title: Text(
//             _suggestions[index].asPascalCase,
//             style: _biggerFont,
//           ),
//         );
//       },
//     );
//   }
// }
