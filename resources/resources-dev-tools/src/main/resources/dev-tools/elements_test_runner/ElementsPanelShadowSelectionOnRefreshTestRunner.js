/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 * @suppress {accessControls}
 */

ElementsTestRunner.selectReloadAndDump = function(next, node) {
  ElementsTestRunner.selectNode(node).then(onSelected);
  let reloaded = false;
  let selected = false;

  function onSelected() {
    TestRunner.addSniffer(Elements.ElementsPanel.prototype, '_lastSelectedNodeSelectedForTest', onReSelected);
    TestRunner.reloadPage(onReloaded);
  }

  function onReloaded() {
    reloaded = true;
    maybeDumpSelectedNode();
  }

  function onReSelected() {
    selected = true;
    maybeDumpSelectedNode();
  }

  function maybeDumpSelectedNode() {
    if (!reloaded || !selected) {
      return;
    }
    const selectedElement = ElementsTestRunner.firstElementsTreeOutline().selectedTreeElement;
    const nodeName = (selectedElement ? selectedElement.node().nodeNameInCorrectCase() : 'null');
    TestRunner.addResult('Selected node: \'' + nodeName + '\'');
    next();
  }
};