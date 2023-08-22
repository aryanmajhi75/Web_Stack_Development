<!-- employee_transform.xsl -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>

  <!-- Import Bootstrap CSS -->
  <xsl:template match="/">
    <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
      </head>
      <body>
        <div class="container">
          <h2>Employee Information</h2>
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <xsl:apply-templates select="employees/employee"/>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>

  <!-- Transform each employee element -->
  <xsl:template match="employee">
    <tr>
      <td><xsl:value-of select="@id"/></td>
      <td>
        <xsl:value-of select="personalInformation/firstName"/> 
        <xsl:text> </xsl:text>
        <xsl:value-of select="personalInformation/lastName"/>
      </td>
      <td><xsl:value-of select="employmentInformation/position"/></td>
      <td><xsl:value-of select="employmentInformation/salary"/></td>
      <td><xsl:value-of select="contactInformation/email"/></td>
      <td>
        <xsl:value-of select="concat(contactInformation/countryCode, ' ', contactInformation/phoneNumber)"/>
      </td>
    </tr>
  </xsl:template>
</xsl:stylesheet>
