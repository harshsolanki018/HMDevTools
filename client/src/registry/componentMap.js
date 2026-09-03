import GenericToolFallback from './implementations/GenericToolFallback';
import JsonFormatter from './implementations/JsonFormatter';
import JsonValidator from './implementations/JsonValidator';
import JsonMinifier from './implementations/JsonMinifier';
import JsonViewer from './implementations/JsonViewer';
import JsonToCsv from './implementations/JsonToCsv';
import CsvToJson from './implementations/CsvToJson';
import JsonToYaml from './implementations/JsonToYaml';
import YamlToJson from './implementations/YamlToJson';
import Base64Encoder from './implementations/Base64Encoder';
import Base64Decoder from './implementations/Base64Decoder';
import UrlEncoder from './implementations/UrlEncoder';
import UrlDecoder from './implementations/UrlDecoder';
import JwtDecoder from './implementations/JwtDecoder';
import UuidGenerator from './implementations/UuidGenerator';
import PasswordGenerator from './implementations/PasswordGenerator';
import LoremIpsumGenerator from './implementations/LoremIpsumGenerator';
import UrlParser from './implementations/UrlParser';
import HtmlFormatter from './implementations/HtmlFormatter';
import CssFormatter from './implementations/CssFormatter';
import JsFormatter from './implementations/JsFormatter';
import UnixTimestampConverter from './implementations/UnixTimestampConverter';
import TimestampToDate from './implementations/TimestampToDate';
import DateToTimestamp from './implementations/DateToTimestamp';
import RegexTester from './implementations/RegexTester';
import SqlFormatter from './implementations/SqlFormatter';
import WordCounter from './implementations/WordCounter';
import CaseConverter from './implementations/CaseConverter';
import RemoveDuplicateLines from './implementations/RemoveDuplicateLines';
import TextDiff from './implementations/TextDiff';
import JsonToTypescript from './implementations/JsonToTypescript';
import JsonToPython from './implementations/JsonToPython';
import JsonToGo from './implementations/JsonToGo';

// Tier 1 Expansion Components
import JsonToXml from './implementations/JsonToXml';
import XmlToJson from './implementations/XmlToJson';
import XmlFormatter from './implementations/XmlFormatter';
import JsonToJava from './implementations/JsonToJava';
import JsonToCsharp from './implementations/JsonToCsharp';
import HtmlEncoder from './implementations/HtmlEncoder';
import HtmlDecoder from './implementations/HtmlDecoder';
import UnicodeConverter from './implementations/UnicodeConverter';
import HashGenerator from './implementations/HashGenerator';
import CronExpressionHelper from './implementations/CronExpressionHelper';
import MarkdownToHtml from './implementations/MarkdownToHtml';
import HtmlToMarkdown from './implementations/HtmlToMarkdown';
import CssMinifier from './implementations/CssMinifier';
import JsMinifier from './implementations/JsMinifier';

// Final Phase 6 Activated Components
import TimezoneConverter from './implementations/TimezoneConverter';
import RegexExplainer from './implementations/RegexExplainer';
import SqlMinifier from './implementations/SqlMinifier';
import WhitespaceCleaner from './implementations/WhitespaceCleaner';

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

  // Expansion Bindings
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
  JsMinifier,

  // Final 4 Active Tools
  TimezoneConverter,
  RegexExplainer,
  SqlMinifier,
  WhitespaceCleaner
};

export const getToolComponent = (componentName) => {
  return COMPONENT_MAP[componentName] || GenericToolFallback;
};
