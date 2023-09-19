<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Canine Details</title>
            </head>
            <body>
                <h1>Canine Details</h1>
                <table border="1">
                    <tr>
                        <th>Breed</th>
                        <th>Color</th>
                        <th>Country</th>
                    </tr>
                    <xsl:for-each select="canines/canine">
                        <tr>
                            <td><xsl:value-of select="breed"/></td>
                            <td><xsl:value-of select="color"/></td>
                            <td><xsl:value-of select="country"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
