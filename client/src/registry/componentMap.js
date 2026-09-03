import GenericToolFallback from './implementations/GenericToolFallback.jsx';
import JsonFormatter from './implementations/JsonFormatter.jsx';
import JsonValidator from './implementations/JsonValidator.jsx';
import JsonMinifier from './implementations/JsonMinifier.jsx';
import JsonViewer from './implementations/JsonViewer.jsx';
import JsonToCsv from './implementations/JsonToCsv.jsx';
import CsvToJson from './implementations/CsvToJson.jsx';
import JsonToYaml from './implementations/JsonToYaml.jsx';
import YamlToJson from './implementations/YamlToJson.jsx';
import Base64Encoder from './implementations/Base64Encoder.jsx';
import Base64Decoder from './implementations/Base64Decoder.jsx';
import UrlEncoder from './implementations/UrlEncoder.jsx';
import UrlDecoder from './implementations/UrlDecoder.jsx';
import JwtDecoder from './implementations/JwtDecoder.jsx';
import UuidGenerator from './implementations/UuidGenerator.jsx';
import PasswordGenerator from './implementations/PasswordGenerator.jsx';
import LoremIpsumGenerator from './implementations/LoremIpsumGenerator.jsx';
import UrlParser from './implementations/UrlParser.jsx';
import HtmlFormatter from './implementations/HtmlFormatter.jsx';
import CssFormatter from './implementations/CssFormatter.jsx';
import JsFormatter from './implementations/JsFormatter.jsx';
import UnixTimestampConverter from './implementations/UnixTimestampConverter.jsx';
import TimestampToDate from './implementations/TimestampToDate.jsx';
import DateToTimestamp from './implementations/DateToTimestamp.jsx';
import RegexTester from './implementations/RegexTester.jsx';
import SqlFormatter from './implementations/SqlFormatter.jsx';
import WordCounter from './implementations/WordCounter.jsx';
import CaseConverter from './implementations/CaseConverter.jsx';
import RemoveDuplicateLines from './implementations/RemoveDuplicateLines.jsx';
import TextDiff from './implementations/TextDiff.jsx';
import JsonToTypescript from './implementations/JsonToTypescript.jsx';
import JsonToPython from './implementations/JsonToPython.jsx';
import JsonToGo from './implementations/JsonToGo.jsx';

// Tier 1 Expansion Components
import JsonToXml from './implementations/JsonToXml.jsx';
import XmlToJson from './implementations/XmlToJson.jsx';
import XmlFormatter from './implementations/XmlFormatter.jsx';
import JsonToJava from './implementations/JsonToJava.jsx';
import JsonToCsharp from './implementations/JsonToCsharp.jsx';
import HtmlEncoder from './implementations/HtmlEncoder.jsx';
import HtmlDecoder from './implementations/HtmlDecoder.jsx';
import UnicodeConverter from './implementations/UnicodeConverter.jsx';
import HashGenerator from './implementations/HashGenerator.jsx';
import CronExpressionHelper from './implementations/CronExpressionHelper.jsx';
import MarkdownToHtml from './implementations/MarkdownToHtml.jsx';
import HtmlToMarkdown from './implementations/HtmlToMarkdown.jsx';
import CssMinifier from './implementations/CssMinifier.jsx';
import JsMinifier from './implementations/JsMinifier.jsx';

export const COMPONENT_MAP = {
  JsonFormatter,
  JsonValidator,
  JsonMinifier,
  JsonViewer,
  JsonToCsv,
  CsvToJson,
  JsonToYaml,
  YamlToJson,
  Base64Encoder,
  Base64Decoder,
  UrlEncoder,
  UrlDecoder,
  JwtDecoder,
  UuidGenerator,
  PasswordGenerator,
  LoremIpsumGenerator,
  UrlParser,
  HtmlFormatter,
  CssFormatter,
  JsFormatter,
  UnixTimestampConverter,
  TimestampToDate,
  DateToTimestamp,
  RegexTester,
  SqlFormatter,
  WordCounter,
  CaseConverter,
  RemoveDuplicateLines,
  TextDiff,
  JsonToTypescript,
  JsonToPython,
  JsonToGo,

  // Tier 1 Expansion Bindings
  JsonToXml,
  XmlToJson,
  XmlFormatter,
  JsonToJava,
  JsonToCsharp,
  HtmlEncoder,
  HtmlDecoder,
  UnicodeConverter,
  HashGenerator,
  CronExpressionHelper,
  MarkdownToHtml,
  HtmlToMarkdown,
  CssMinifier,
  JsMinifier
};

export const getToolComponent = (componentName) => {
  return COMPONENT_MAP[componentName] || GenericToolFallback;
};
