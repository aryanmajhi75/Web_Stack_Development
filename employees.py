from lxml import etree

def validate_xml(xml_filename, xsd_filename):
    xmlschema_doc = etree.parse(xsd_filename)
    xmlschema = etree.XMLSchema(xmlschema_doc)
    
    xml_doc = etree.parse(xml_filename)
    
    if xmlschema.validate(xml_doc):
        print("XML document is valid.")
    else:
        print("XML document is not valid. Validation errors:")
        for error in xmlschema.error_log:
            print(f"Line {error.line}, Column {error.column}: {error.message}")

validate_xml("employees.xml", "employee_schema.xsd")
    