import lxml.etree as ET

def validate_xml(xmlFile, xsdFile):
    xmlschema = ET.XMLSchema(ET.parse(xsdFile))
    xmlparser = ET.XMLParser(schema=xmlschema)
    xml_data = ET.parse(xmlFile, xmlparser)
    return xml_data

def transform_xml_to_html(xmlFile, xsltFile):
    xml_doc = ET.parse(xmlFile)
    xslt_doc = ET.parse(xsltFile)
    transform = ET.XSLT(xslt_doc)
    html_content = transform(xml_doc)
    return html_content

def save_html_output(html_content, outputFile):
    with open(outputFile, "wb") as output_file:
        output_file.write(html_content)

if __name__ == "__main__":
    xmlFile = "employees.xml"
    xsltFile = "employees.xsl"
    xsdFile = "employee_schema.xsd"
    outputFile = "output.html"
    
    try:
        validated_xml_data = validate_xml(xmlFile, xsdFile)
        html_content = transform_xml_to_html(xmlFile, xsltFile)
        save_html_output(html_content, outputFile)
        print("Conversion successful. HTML output saved as", outputFile)
    except ET.XMLSchemaError as e:
        print("XML validation error:", e)
    except ET.XSLTError as e:
        print("XSLT transformation error:", e)
    except Exception as e:
        print("An error occurred:", e)