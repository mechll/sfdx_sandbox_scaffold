import xml.etree.ElementTree as ET
import xml.dom.minidom
from xml.etree.ElementTree import tostring

def main():
    # Load the XML file into an ElementTree object
    tree = ET.parse('./manifest/allMetadata.xml')

    # Get the root element of the tree
    root = tree.getroot()
    ET.register_namespace('', 'http://soap.sforce.com/2006/04/metadata')

    # Define a list of names to remove
    names_to_remove = ['Dashboard', 'ReportType', 'Report']

    # Loop through each child element of the root element
    for child in root.findall('{http://soap.sforce.com/2006/04/metadata}types'):
        name = child.find('{http://soap.sforce.com/2006/04/metadata}name').text
        members_items = child.findall(
        '{http://soap.sforce.com/2006/04/metadata}members')
        if name in names_to_remove:

            # Create a new XML tree with the package node as the root
            package = ET.Element('Package', {'xmlns': 'http://soap.sforce.com/2006/04/metadata'})
            types = ET.SubElement(package, 'types')
            for member in members_items:
                member_node = ET.SubElement(types, 'members')
                member_node.text = member.text

            name_element = ET.SubElement(types, 'name')
            name_element.text = name

            version = ET.SubElement(package, 'version')
            version.text = '56.0'

            # fix indentation
            xml_string = ET.tostring(package, encoding='utf8', method='xml')
            xml_p = xml.dom.minidom.parseString(xml_string)
            pretty_xml = xml_p.toprettyxml(indent='    ')

            # Write the new tree to a file with a numbered prefix in the filename
            with open(f'./manifest/{name}s.xml', 'w', encoding='utf-8') as file:
                file.write(pretty_xml)

            # Remove the types node from the root element of the original XML tree
            root.remove(child)

        # Write the updated XML to a new file
        tree.write('./manifest/package.xml', encoding='utf-8', xml_declaration=True)



if __name__ == "__main__":
    # calling main function
    main()