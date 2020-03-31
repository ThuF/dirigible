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
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as FormatterModule from './formatter.js';

self.Formatter = self.Formatter || {};
Formatter = Formatter || {};

/** @constructor */
Formatter.FormatterWorkerPool = FormatterModule.FormatterWorkerPool.FormatterWorkerPool;

Formatter.formatterWorkerPool = FormatterModule.FormatterWorkerPool.formatterWorkerPool;

/** @interface */
Formatter.Formatter = FormatterModule.ScriptFormatter.FormatterInterface;

/** @constructor */
Formatter.ScriptFormatter = FormatterModule.ScriptFormatter.ScriptFormatter;

/** @interface */
Formatter.FormatterSourceMapping = FormatterModule.ScriptFormatter.FormatterSourceMapping;

/** @constructor */
Formatter.SourceFormatter = FormatterModule.SourceFormatter.SourceFormatter;

/** @type {!Formatter.SourceFormatter} */
Formatter.sourceFormatter = FormatterModule.sourceFormatter;