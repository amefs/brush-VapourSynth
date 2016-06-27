/**

 * SyntaxHighlighter

 * http://alexgorbatchev.com/SyntaxHighlighter

 *

 * SyntaxHighlighter is donationware. If you are using it, please donate.

 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html

 *

 * @version

 * 3.0.83 (Wed, 16 Apr 2014 03:56:09 GMT)

 *

 * @copyright

 * Copyright (C) 2004-2013 Alex Gorbatchev.

 *

 * @license

 * Dual licensed under the MIT and GPL licenses.

 */

;(function()

{

	// CommonJS

	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);



	function Brush()

	{

	// Contributed by Amefs

  var keywords = 'and as assert break class continue def del elif else ' +
    'except exec finally for from global if import in is ' +
    'lambda not or pass raise return try yield while';

  var funcs = 'core.std.AddBorders core.std.AssumeFPS core.std.Binarize core.std.BlankClip ' +
    'core.std.Cache core.text.ClipInfo core.std.ClipToProp core.std.Convolution core.std.Convolution ' +
    'core.text.CoreInfo core.std.CropAbs core.std.CropRel core.std.Deflate core.std.Inflate ' +
    'core.std.DeleteFrames core.std.DoubleWeave core.std.DuplicateFrames core.std.Expr ' +
    'core.std.FlipVertical core.std.FlipHorizontal core.std.FrameEval core.text.FrameNum ' +
    'core.text.FrameProps core.std.FreezeFrames core.std.Interleave core.std.Invert ' +
    'core.std.Levels core.std.Limiter core.std.LoadPlugin core.avs.LoadPlugin core.std.Loop ' +
    'core.std.Lut core.std.Lut2 core.std.MakeDiff core.std.MaskedMerge core.std.Median ' +
    'core.std.Merge core.std.MergeDiff core.std.Minimum core.std.Maximum core.ModifyFrame ' +
    'core.std.PEMVerifier core.std.PlaneStats core.std.Prewitt core.std.Sobel ' +
    'core.std.PropToClip core.resize.Bilinear core.resize.Bicubic core.resize.Point ' +
    'core.resize.Lanczos core.resize.Spline16 core.resize.Spline36 core.std.Reverse' +
    'core.std.SelectEvery core.std.SeparateFields core.std.SetFieldBased ' +
    'core.std.ShufflePlanes core.std.Splice core.std.StackVertical core.std.StackHorizontal ' +
    'core.text.Text core.std.Transpose core.std.Trim core.std.Turn180 core.assvapour.AssRender ' +
    'core.avisource.AVISource core.avisource.AVIFileSource core.avisource.OpenDMLSource ' +
    'core.eedi3.eedi3 core.imwri.Write core.imwri.Read core.morpho.Dilate core.morpho.Erode ' +
    'core.morpho.Open core.morpho.Close core.morpho.TopHat core.morpho.BottomHat ' +
    'core.ocr.Recognize core.rgvs.RemoveGrain core.vinverse.Vinverse core.vivtc.VFM ' +
    'core.d2v.Source core.ffms2.Index core.ffms2.Source core.ffms2.SetLogLevel ' +
    'core.ffms2.GetLogLevel core.ffms2.GetVersion core.raws.Source core.tcanny.TCanny ' +
    'core.lsmas.LWLibavSource core.avsr.Import core.fmtc.bitdepth core.fmtc.matrix ' +
    'core.fmtc.matrix2020cl core.fmtc.primaries core.fmtc.resample core.fmtc.transfer ' +
    'core.fmtc.stack16tonative core.fmtc.nativetostack16 core.w2xc.Waifu2x ' +
    'core.it.IT core.bilateral.Bilateral core.bm3d.RGB2OPP core.bm3d.OPP2RGB ' +
    'core.bm3d.Basic core.bm3d.Final core.bm3d.VBasic core.bm3d.VFinal core.bm3d.VAggregate ' +
    'core.dfttest.DFTTest core.flux.SmoothT core.knlm.KNLMeansCL core.focus.TemporalSoften ' +
    'core.tnlm.TNLMeans core.vd.VagueDenoiser core.bifrost.Bifrost core.ssiq.SSIQ ' +
    'core.tcomb.TComb core.hist.Classic core.hist.Levels core.hist.Color core.hist.Color2 core.hist.Luma ' +
    'core.scd.Detect core.scd.ApplyLog core.scxvid.Scxvid core.vscope.Scope core.grain.Add ' +
    'core.warp.AWarpSharp2 core.warp.ASobel core.warp.ABlur core.warp.AWarp core.damb.Read ' +
    'core.edgefixer.ContinuityFixer core.ctmf.CTMF core.dct.Filter core.deblock.Deblock ' +
    'core.delogo.AddLogo core.delogo.EraseLogo core.f3kdb.Deband core.fh.FieldHint core.fb.FillBorders ' +
    'core.msmoosh.MSmooth core.mv.Super core.mv.Analyse core.mv.Recalculate core.mv.Compensate ' +
    'core.mv.Degrain1 core.mv.Degrain2 core.mv.Degrain3 core.mv.Mask core.mv.Finest core.mv.FlowBlur ' +
    'core.mv.FlowInter core.mv.FlowFPS core.mv.BlockFPS core.mv.SCDetection core.mv.DepanAnalyse ' +
    'core.mv.DepanEstimate core.mv.DepanCompensate core.mv.DepanStabilise core.retinex.MSRCP ';

  var special = 'haf.daa haf.santiag haf.FixChromaBleedingMod haf.Deblock_QED haf.DeHalo_alpha ' +
    'haf.YAHR haf.HQDering mod haf.QTGMC haf.srestore haf.ivtc_txt60mc haf.logoNR haf.Vinverse ' +
    'haf.Vinverse2 haf.LUTDeCrawl haf.LUTDeRainbow haf.Stab haf.GrainStabilizeMC haf.SMDegrain ' +
    'haf.STPresso haf.SigmoidInverse haf.SigmoidDirect haf.GrainFactory3 haf.InterFrame haf.SmoothLevels ' +
    'haf.FastLineDarken haf.Toon haf.LSFmod haf.Bob haf.ChangeFPS haf.Clamp haf.KNLMeansCL haf.Overlay ' +
    'haf.Padding haf.Resize haf.TemporalSoften haf.Weave haf.set_scenechange haf.ContraSharpening ' +
    'haf.MinBlur haf.sbr haf.DitherLumaRebuild haf.mt_expand_multi haf.mt_inpand_multi ' +
    'haf.mt_inflate_multi haf.mt_deflate_multi mvf.Depth mvf.ToRGB mvf.ToYUV mvf.BM3D ' +
    'mvf.PlaneStatistics mvf.PlaneCompare mvf.ShowAverage mvf.FilterIf mvf.FilterCombed ' +
    'mvf.Min mvf.Max mvf.Avg mvf.MinFilter mvf.MaxFilter mvf.LimitFilter mvf.PointPower ' +
    'mvf.CheckMatrix mvf.postfix2infix mvf.SetColorSpace mvf.AssumeFrame mvf.AssumeTFF ' +
    'mvf.AssumeBFF mvf.AssumeField mvf.CheckVersion mvf.GetMatrix mvf.zDepth mvf.PlaneAverage ' +
    'mvf.GetPlane mvf.GrayScale mvf.Preview';

  var constants = 'havsfunc haf mvsfunc mvf vapoursynth vs';


		this.regexList = [

				{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },

				{ regex: /^\s*@\w+/gm, 										css: 'decorator' },

				{ regex: /(['\"]{3})([^\1])*?\1/gm, 						css: 'comments' },

				{ regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm, 					css: 'string' },

				{ regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm, 				css: 'string' },

				{ regex: /\+|\-|\*|\/|\%|=|==/gm, 							css: 'keyword' },

				{ regex: /\b\d+\.?\w*/g, 									css: 'value' },

				{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'constants' },
				{ regex: new RegExp(this.getKeywords(constants), 'gmi'),	css: 'color3' },
				{ regex: new RegExp(this.getKeywords(keywords), 'gm'), 		css: 'keyword' },
				{ regex: new RegExp(this.getKeywords(special), 'gm'), 		css: 'string' }

				];

			

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);

	};



	Brush.prototype	= new SyntaxHighlighter.Highlighter();

	Brush.aliases	= ['vs', 'vapoursynth'];



	SyntaxHighlighter.brushes.VapourSynth = Brush;



	// CommonJS

	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;

})();

