#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.34011
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Raspisanie
{
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


[System.CodeDom.Compiler.GeneratedCodeAttribute("RazorTemplatePreprocessor", "2.6.0.0")]
public partial class RazorView : RazorViewBase
{

#line hidden

#line 1 "RazorView.cshtml"
public Model1 Model { get; set; }

#line default
#line hidden


public override void Execute()
{
WriteLiteral("<html");

WriteLiteral(" lang=\"en\"");

WriteLiteral(">\r\n<head>\r\n    <meta");

WriteLiteral(" charset=\"utf-8\"");

WriteLiteral(">\r\n    <meta");

WriteLiteral(" http-equiv=\"X-UA-Compatible\"");

WriteLiteral(" content=\"IE=edge\"");

WriteLiteral(">\r\n    <meta");

WriteLiteral(" name=\"viewport\"");

WriteLiteral(" content=\"width=device-width, initial-scale=1\"");

WriteLiteral(">\r\n    <title>Raspisanie</title>\r\n    <link");

WriteLiteral(" href=\"css/bootstrap.min.css\"");

WriteLiteral(" rel=\"stylesheet\"");

WriteLiteral(">\r\n</head>\r\n<body>\r\n<script");

WriteLiteral(" src=\"js/jquery.js\"");

WriteLiteral("></script>\r\n<script");

WriteLiteral(" src=\"js/bootstrap.js\"");

WriteLiteral("></script>\r\n<script");

WriteLiteral(" src=\"js/app.js\"");

WriteLiteral("></script>\r\n\r\n\r\n\r\n<div");

WriteLiteral(" id=\"content\"");

WriteLiteral(">\r\n<div");

WriteLiteral(" align=\"center\"");

WriteLiteral(">\r\n\r\n<div");

WriteLiteral(" class=\"btn-group\"");

WriteLiteral(">\r\n    <button");

WriteLiteral(" type=\"button\"");

WriteLiteral(" class=\"btn btn-default dropdown-toggle\"");

WriteLiteral(" data-toggle=\"dropdown\"");

WriteLiteral(" id=\"btn1\"");

WriteLiteral(">DayOfWeek <span");

WriteLiteral(" class=\"caret\"");

WriteLiteral("></span>\r\n    </button>\r\n    <ul");

WriteLiteral(" class=\"dropdown-menu\"");

WriteLiteral(" role=\"menu\"");

WriteLiteral(">\r\n        <li><a");

WriteLiteral(" href=\"#\"");

WriteLiteral(" onclick=\"selectDayOfWeek(0)\"");

WriteLiteral(">Понедельник</a></li>\r\n        <li><a");

WriteLiteral(" href=\"#\"");

WriteLiteral(" onclick=\"selectDayOfWeek(1)\"");

WriteLiteral(">Вторник</a></li>\r\n        <li><a");

WriteLiteral(" href=\"#\"");

WriteLiteral(" onclick=\"selectDayOfWeek(2)\"");

WriteLiteral(">Среда</a></li>\r\n        <li><a");

WriteLiteral(" href=\"#\"");

WriteLiteral(" onclick=\"selectDayOfWeek(3)\"");

WriteLiteral(">Четверг</a></li>\r\n        <li><a");

WriteLiteral(" href=\"#\"");

WriteLiteral(" onclick=\"selectDayOfWeek(4)\"");

WriteLiteral(">Пятница</a></li>\r\n    </ul>\r\n</div>\r\n\r\n<div");

WriteLiteral(" class=\"btn-group\"");

WriteLiteral(">\r\n    <button");

WriteLiteral(" type=\"button\"");

WriteLiteral(" class=\"btn btn-default dropdown-toggle\"");

WriteLiteral(" data-toggle=\"dropdown\"");

WriteLiteral(" id=\"set\"");

WriteLiteral("><span");

WriteLiteral(" class=\"glyphicon glyphicon-cog\"");

WriteLiteral("></span> <span");

WriteLiteral(" class=\"caret\"");

WriteLiteral("></span>\r\n    </button>\r\n        <ul");

WriteLiteral(" class=\"dropdown-menu\"");

WriteLiteral(" role=\"menu\"");

WriteLiteral(" id=\"groupsselct\"");

WriteLiteral(">\r\n    </ul>\r\n</div>\r\n\r\n<table");

WriteLiteral(" class=\"table table-striped\"");

WriteLiteral(">\r\n    <tr>\r\n        <td");

WriteLiteral(" class=\"time\"");

WriteLiteral(">8:10-9:45</td>\r\n        <td");

WriteLiteral(" class=\"zan\"");

WriteLiteral(" id=\"rasp0p\"");

WriteLiteral(">Предмет</td>\r\n        <td");

WriteLiteral(" class=\"targ\"");

WriteLiteral(" id=\"rasp0c\"");

WriteLiteral(">Каб</td>\r\n    </tr>\r\n    <tr>\r\n        <td");

WriteLiteral(" class=\"time\"");

WriteLiteral(">9:55-11:30</td>\r\n        <td");

WriteLiteral(" class=\"zan\"");

WriteLiteral(" id=\"rasp1p\"");

WriteLiteral(">Предмет</td>\r\n        <td");

WriteLiteral(" class=\"targ\"");

WriteLiteral(" id=\"rasp1c\"");

WriteLiteral(">Каб</td>\r\n    </tr>\r\n    <tr>\r\n        <td");

WriteLiteral(" class=\"time\"");

WriteLiteral(">11:40-13:15</td>\r\n        <td");

WriteLiteral(" class=\"zan\"");

WriteLiteral(" id=\"rasp2p\"");

WriteLiteral(">Предмет</td>\r\n        <td");

WriteLiteral(" class=\"targ\"");

WriteLiteral(" id=\"rasp2c\"");

WriteLiteral(">Каб</td>\r\n    </tr>\r\n    <tr>\r\n        <td");

WriteLiteral(" class=\"time\"");

WriteLiteral(">13:35-15:10</td>\r\n        <td");

WriteLiteral(" class=\"zan\"");

WriteLiteral(" id=\"rasp3p\"");

WriteLiteral(">Предмет</td>\r\n        <td");

WriteLiteral(" class=\"targ\"");

WriteLiteral(" id=\"rasp3c\"");

WriteLiteral(">Каб</td>\r\n    </tr>\r\n    <tr>\r\n        <td");

WriteLiteral(" class=\"time\"");

WriteLiteral(">15:20-16:55</td>\r\n        <td");

WriteLiteral(" class=\"zan\"");

WriteLiteral(" id=\"rasp4p\"");

WriteLiteral(">Предмет</td>\r\n        <td");

WriteLiteral(" class=\"targ\"");

WriteLiteral(" id=\"rasp4c\"");

WriteLiteral(">Каб</td>\r\n    </tr>\r\n\r\n</table>\r\n</div>\r\n\r\n<div");

WriteLiteral(" class=\"modal fade\"");

WriteLiteral(" id=\"modalUpd\"");

WriteLiteral(">\r\n    <div");

WriteLiteral(" class=\"modal-dialog\"");

WriteLiteral(">\r\n        <div");

WriteLiteral(" class=\"modal-content\"");

WriteLiteral(">\r\n            <div");

WriteLiteral(" class=\"modal-header\"");

WriteLiteral(">\r\n                <button");

WriteLiteral(" type=\"button\"");

WriteLiteral(" class=\"close\"");

WriteLiteral(" data-dismiss=\"modal\"");

WriteLiteral(" aria-hidden=\"true\"");

WriteLiteral(">&times;</button>\r\n                <h4");

WriteLiteral(" class=\"modal-title\"");

WriteLiteral(">Доступно обновление</h4>\r\n            </div>\r\n            <div");

WriteLiteral(" class=\"modal-body\"");

WriteLiteral(">\r\n                <p>Доступна новая версия, скачать ?</p>\r\n            </div>\r\n " +
"           <div");

WriteLiteral(" class=\"modal-footer\"");

WriteLiteral(">\r\n                <button");

WriteLiteral(" type=\"button\"");

WriteLiteral(" class=\"btn btn-default\"");

WriteLiteral(" data-dismiss=\"modal\"");

WriteLiteral(">Не сейчас</button>\r\n                <a");

WriteLiteral(" type=\"button\"");

WriteLiteral(" class=\"btn btn-primary\"");

WriteLiteral(" rel=\"external\"");

WriteLiteral(" id=\"downldUpd\"");

WriteLiteral(">Скачать</a>\r\n            </div>\r\n        </div><!-- /.modal-content -->\r\n    </d" +
"iv><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n\r\n<div");

WriteLiteral(" id=\"news\"");

WriteLiteral(">\r\n\r\n</div>\r\n</div>\r\n</body>\r\n</html>");

}
}

// NOTE: this is the default generated helper class. You may choose to extract it to a separate file 
// in order to customize it or share it between multiple templates, and specify the template's base 
// class via the @inherits directive.
public abstract class RazorViewBase
{

		// This field is OPTIONAL, but used by the default implementation of Generate, Write, WriteAttribute and WriteLiteral
		//
		System.IO.TextWriter __razor_writer;

		// This method is OPTIONAL
		//
		/// <summary>Executes the template and returns the output as a string.</summary>
		/// <returns>The template output.</returns>
		public string GenerateString ()
		{
			using (var sw = new System.IO.StringWriter ()) {
				Generate (sw);
				return sw.ToString ();
			}
		}

		// This method is OPTIONAL, you may choose to implement Write and WriteLiteral without use of __razor_writer
		// and provide another means of invoking Execute.
		//
		/// <summary>Executes the template, writing to the provided text writer.</summary>
		/// <param name="writer">The TextWriter to which to write the template output.</param>
		public void Generate (System.IO.TextWriter writer)
		{
			__razor_writer = writer;
			Execute ();
			__razor_writer = null;
		}

		// This method is REQUIRED, but you may choose to implement it differently
		//
		/// <summary>Writes a literal value to the template output without HTML escaping it.</summary>
		/// <param name="value">The literal value.</param>
		protected void WriteLiteral (string value)
		{
			__razor_writer.Write (value);
		}

		// This method is REQUIRED if the template contains any Razor helpers, but you may choose to implement it differently
		//
		/// <summary>Writes a literal value to the TextWriter without HTML escaping it.</summary>
		/// <param name="writer">The TextWriter to which to write the literal.</param>
		/// <param name="value">The literal value.</param>
		protected static void WriteLiteralTo (System.IO.TextWriter writer, string value)
		{
			writer.Write (value);
		}

		// This method is REQUIRED, but you may choose to implement it differently
		//
		/// <summary>Writes a value to the template output, HTML escaping it if necessary.</summary>
		/// <param name="value">The value.</param>
		/// <remarks>The value may be a Action<System.IO.TextWriter>, as returned by Razor helpers.</remarks>
		protected void Write (object value)
		{
			WriteTo (__razor_writer, value);
		}

		// This method is REQUIRED if the template contains any Razor helpers, but you may choose to implement it differently
		//
		/// <summary>Writes an object value to the TextWriter, HTML escaping it if necessary.</summary>
		/// <param name="writer">The TextWriter to which to write the value.</param>
		/// <param name="value">The value.</param>
		/// <remarks>The value may be a Action<System.IO.TextWriter>, as returned by Razor helpers.</remarks>
		protected static void WriteTo (System.IO.TextWriter writer, object value)
		{
			if (value == null)
				return;

			var write = value as Action<System.IO.TextWriter>;
			if (write != null) {
				write (writer);
				return;
			}

			//NOTE: a more sophisticated implementation would write safe and pre-escaped values directly to the
			//instead of double-escaping. See System.Web.IHtmlString in ASP.NET 4.0 for an example of this.
			System.Net.WebUtility.HtmlEncode (value.ToString (), writer);
		}

		// This method is REQUIRED, but you may choose to implement it differently
		//
		/// <summary>
		/// Conditionally writes an attribute to the template output.
		/// </summary>
		/// <param name="name">The name of the attribute.</param>
		/// <param name="prefix">The prefix of the attribute.</param>
		/// <param name="suffix">The suffix of the attribute.</param>
		/// <param name="values">Attribute values, each specifying a prefix, value and whether it's a literal.</param>
		protected void WriteAttribute (string name, string prefix, string suffix, params Tuple<string,object,bool>[] values)
		{
			WriteAttributeTo (__razor_writer, name, prefix, suffix, values);
		}

		// This method is REQUIRED if the template contains any Razor helpers, but you may choose to implement it differently
		//
		/// <summary>
		/// Conditionally writes an attribute to a TextWriter.
		/// </summary>
		/// <param name="writer">The TextWriter to which to write the attribute.</param>
		/// <param name="name">The name of the attribute.</param>
		/// <param name="prefix">The prefix of the attribute.</param>
		/// <param name="suffix">The suffix of the attribute.</param>
		/// <param name="values">Attribute values, each specifying a prefix, value and whether it's a literal.</param>
		///<remarks>Used by Razor helpers to write attributes.</remarks>
		protected static void WriteAttributeTo (System.IO.TextWriter writer, string name, string prefix, string suffix, params Tuple<string,object,bool>[] values)
		{
			// this is based on System.Web.WebPages.WebPageExecutingBase
			// Copyright (c) Microsoft Open Technologies, Inc.
			// Licensed under the Apache License, Version 2.0
			if (values.Length == 0) {
				// Explicitly empty attribute, so write the prefix and suffix
				writer.Write (prefix);
				writer.Write (suffix);
				return;
			}

			bool first = true;
			bool wroteSomething = false;

			for (int i = 0; i < values.Length; i++) {
				Tuple<string,object,bool> attrVal = values [i];
				string attPrefix = attrVal.Item1;
				object value = attrVal.Item2;
				bool isLiteral = attrVal.Item3;

				if (value == null) {
					// Nothing to write
					continue;
				}

				// The special cases here are that the value we're writing might already be a string, or that the 
				// value might be a bool. If the value is the bool 'true' we want to write the attribute name instead
				// of the string 'true'. If the value is the bool 'false' we don't want to write anything.
				//
				// Otherwise the value is another object (perhaps an IHtmlString), and we'll ask it to format itself.
				string stringValue;
				bool? boolValue = value as bool?;
				if (boolValue == true) {
					stringValue = name;
				} else if (boolValue == false) {
					continue;
				} else {
					stringValue = value as string;
				}

				if (first) {
					writer.Write (prefix);
					first = false;
				} else {
					writer.Write (attPrefix);
				}

				if (isLiteral) {
					writer.Write (stringValue ?? value);
				} else {
					WriteTo (writer, stringValue ?? value);
				}
				wroteSomething = true;
			}
			if (wroteSomething) {
				writer.Write (suffix);
			}
		}
		// This method is REQUIRED. The generated Razor subclass will override it with the generated code.
		//
		///<summary>Executes the template, writing output to the Write and WriteLiteral methods.</summary>.
		///<remarks>Not intended to be called directly. Call the Generate method instead.</remarks>
		public abstract void Execute ();

}
}
#pragma warning restore 1591
